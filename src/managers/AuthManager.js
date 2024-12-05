import HashUtils from "../utils/HashUtils.js";

class AuthManager {
  constructor() {
    this.loggedIn = false;
    this.currentWallet = null;
  }

  init() {
    this.loggedIn = false;
    this.currentWallet = null;
  }

  login(secretPhrase) {
    // Secret Key ve Public Key oluşturma
    const secretKey = HashUtils.sha256(secretPhrase);
    const publicKey = HashUtils.sha256(secretKey);

    this.loggedIn = true;
    this.currentWallet = publicKey;
    return this.loggedIn;
  }

  disconnect() {
    this.loggedIn = false;
    this.currentWallet = null;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getCurrentWallet() {
    return this.currentWallet;
  }
}

export default new AuthManager();