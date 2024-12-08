import AuthManager from "./src/managers/auth-manager.js";
import inquirer from "inquirer";
import MainMenu from "./src/menus/main-menu.js";
import transactionManager from "./src/managers/transaction-manager.js";
import walletService from "./src/services/wallet-service.js";
import poolService from "./src/services/pool-service.js";


console.log("Hello, Welcome to ITUChain!");

async function startApp() {
  await MainMenu()
}

// Uygulamayı başlat
startApp().catch((err) => {
  console.error("An error occurred:", err);
  process.exit(1);
});
