import inquirer from "inquirer";


async function PoolsMenu() {
    
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

export default PoolsMenu;