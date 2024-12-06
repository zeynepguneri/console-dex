import inquirer from "inquirer";
import AuthManager from "../managers/auth-manager.js";
import MainMenu from "./main-menu.js";
import WalletMenu from "./wallet-menu.js";


async function ItuScanMenu() {

    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Main Menu",
        choices: ["0x9s1gf1f9s3..123s", "Return Main Menu"]
      }
    ]);
  
    if (choice === "0x9s1gf1f9s3..123s") {
      await WalletMenu(choice);
    }else if(choice === "Return Main Menu"){}
}

export default ItuScanMenu;