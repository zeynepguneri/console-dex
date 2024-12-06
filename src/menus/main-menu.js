import inquirer from "inquirer";
import AuthManager from "../managers/auth-manager.js";
import ItuScanMenu from "./ituscan-menu.js";
import WalletMenu from "./wallet-menu.js";
import PoolsMenu from "./pools-menu.js";

async function MainMenu() {
  console.log("\nConnected Wallet: " + AuthManager.getCurrentWallet());
  console.log("----------------------------------------------------------------------------------------");
  
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Main Menu",
      choices: ["My Balances", "ITUScan", "Pools", "Disconnect"]
    }
  ]);

  if (choice === "My Balances") {
    await WalletMenu(AuthManager.getCurrentWallet());
    await MainMenu();
  }else if(choice === "ITUScan"){
    await ItuScanMenu();
    await MainMenu();
  }else if(choice === "Pools"){
    await PoolsMenu();
    await MainMenu();
  }else if(choice === "Disconnect"){
    AuthManager.disconnect();
  }
}

export default MainMenu;
