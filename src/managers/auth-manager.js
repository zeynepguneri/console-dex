import HashUtils from "../utils/hash-utils.js";

class AuthManager {
  constructor() {
    this.loggedIn = false;
    this.currentWallet = null;
    this.privateKey = null;
  }

  login(secretPhrase) {
    const privateKey = HashUtils.sha256(secretPhrase);
    const publicKey = HashUtils.sha256(privateKey);

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