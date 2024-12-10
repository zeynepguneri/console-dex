import AuthManager from "./src/managers/auth_manager.js";
import inquirer from "inquirer";
import MainMenu from "./src/menus/main_menu.js";
import transactionManager from "./src/managers/transaction_manager.js";
import walletService from "./src/services/wallet_service.js";
import poolService from "./src/services/pool_service.js";


console.log("Hello, Welcome to ITUChain!");

async function startApp() {
  await MainMenu()
}

// Uygulamayı başlat
startApp().catch((err) => {
  console.error("An error occurred:", err);
  process.exit(1);
});
