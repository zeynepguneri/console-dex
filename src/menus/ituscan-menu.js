import inquirer from "inquirer";
import WalletMenu from "./wallet-menu.js";
import walletService from "../services/wallet-service.js";
import MainMenu from "./main-menu.js";


async function ItuScanMenu() {
    const wallets = await walletService.getWallets();
    const publicKeys = wallets.map((wallet) => wallet.public_key);

    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Wallets",
        choices: [...publicKeys, "Return Back"]
      }
    ]);
  
    if (publicKeys.includes(choice)) {
      await WalletMenu(choice);
      await ItuScanMenu();
    } else if (choice === "Return Back") {}
}

export default ItuScanMenu;