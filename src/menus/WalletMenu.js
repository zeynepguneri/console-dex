import inquirer from "inquirer";

async function WalletMenu(wallet) {

    console.log("Balances Of: " + wallet);
    console.log("----------------------------------------------------------------------------------------");
    console.log("TokenA: 1234.00");
    console.log("TokenB: 5734.00");
    

    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Wallet Menu",
        choices: ["Return Main Menu"]
      }
    ]);
  
    if(choice === "Return Main Menu"){}
}

export default WalletMenu;