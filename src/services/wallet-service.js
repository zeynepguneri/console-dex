import { fetchDocs, fetchDocByQuery, updateDocument } from "../utils/firebase-helper.js";

async function getWallets() {
  return await fetchDocs("wallets");
}

async function getWalletByPublicKey(publicKey) {
  return await fetchDocByQuery("wallets", "public_key", publicKey);
}

async function updateWallet(wallet) {
  const existingWallet = await getWalletByPublicKey(wallet.public_key);
  if (!existingWallet) {
    console.log("No matching wallet found for the given public_key.");
    return false;
  }
  return await updateDocument("wallets", existingWallet.id, wallet);
}

export default {
  getWallets,
  getWalletByPublicKey,
  updateWallet,
};
