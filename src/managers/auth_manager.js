import walletService from "../services/wallet_service.js";
import HashUtils from "../utils/hash_utils.js";

class AuthManager {
  constructor() {
    this.loggedIn = false;
    this.currentWallet = null;
    this.privateKey = null;
  }

  async login(secretPhrase) {
    const privateKey = HashUtils.sha256(secretPhrase);
    const publicKey = HashUtils.sha256(privateKey);
    
    const wallet = await walletService.getWalletByPublicKey(publicKey);
    
    if (!wallet) {
      await walletService.addWallet({
        public_key: publicKey,
        balances: 
          { tokenA: 100, tokenB: 100 }
        })
    }

    this.loggedIn = true;
    this.currentWallet = publicKey;
    this.privateKey = privateKey;
    return this.loggedIn;
  }

  disconnect() {
    this.loggedIn = false;
    this.currentWallet = null;
    this.privateKey = null;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getCurrentWallet() {
    return this.currentWallet;
  }

  getPrivateKey() {
    return this.privateKey;
  }
}

export default new AuthManager();