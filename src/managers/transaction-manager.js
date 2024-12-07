import walletService from "../services/wallet-service.js";
import poolService from "../services/pool-service.js";
import HashUtils from "../utils/hash-utils.js";

async function swap(privateKey, poolId, token, amount) {
  try {
    // Private key'den SHA256 hash ile public key türetme
    const publicKey = HashUtils.sha256(privateKey);

    // Public key'e sahip wallet'ı alma
    const wallet = await walletService.getWalletByPublicKey(publicKey);
    if (!wallet) {
      throw new Error("Wallet not found for the provided private key.");
    }

    // Pool'u alma
    const pool = await poolService.getPoolById(poolId);
    if (!pool) {
      throw new Error("Pool not found for the provided pool ID.");
    }

    // Pool'dan token ve targetToken'ı belirleme
    const token1 = Object.keys(pool.token_1)[0];
    const token2 = Object.keys(pool.token_2)[0];
    const targetToken = token === token1 ? token2 : token1;

    const token1Amount = pool.token_1[token1];
    const token2Amount = pool.token_2[token2];
    const k = pool.k; // Havuzdan gelen k değeri

    // Cüzdan bakiyelerini kontrol et
    if (!wallet.balances[token] || wallet.balances[token] < amount) {
      throw new Error(`Insufficient ${token} balance.`);
    }

    // Pool token miktarını güncelle
    const updatedTokenAmount = token === token1 ? token1Amount + amount : token2Amount + amount;
    const updatedTargetTokenAmount = k / updatedTokenAmount;

    // Hedef token miktarını hesapla
    const targetTokenDelta = (token === token1 ? token2Amount : token1Amount) - updatedTargetTokenAmount;

    // Eğer hedef token miktarı negatifse işlem geçersizdir
    if (targetTokenDelta <= 0) {
      throw new Error("Swap amount is too small to provide a meaningful target token output.");
    }

    // Kullanıcıdan token düş ve hedef token ekle
    wallet.balances[token] -= amount;
    wallet.balances[targetToken] = (wallet.balances[targetToken] || 0) + targetTokenDelta;

    // Pool token'larını güncelle
    if (token === token1) {
      pool.token_1[token1] += amount;
      pool.token_2[token2] = updatedTargetTokenAmount;
    } else {
      pool.token_2[token2] += amount;
      pool.token_1[token1] = updatedTargetTokenAmount;
    }

    // Wallet ve pool'u güncelle
    const walletUpdateResult = await walletService.updateWallet(wallet);
    const poolUpdateResult = await poolService.updatePool(pool);

    if (!walletUpdateResult || !poolUpdateResult) {
      throw new Error("Failed to update wallet or pool after swap.");
    }

    console.log(
      `Successfully swapped ${amount} ${token} for ${targetTokenDelta.toFixed(6)} ${targetToken}.`
    );
    return { wallet, pool };
  } catch (error) {
    console.error("Error during swap operation:", error.message);
    throw error;
  }
}

export default {
  swap,
};
