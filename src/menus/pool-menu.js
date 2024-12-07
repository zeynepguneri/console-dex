import inquirer from "inquirer";
import poolService from "../services/pool-service.js";
import SwapMenu from "./swap-menu.js";

async function PoolMenu(pool_id) {
    const pool = await poolService.getPoolById(pool_id);

    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Pool Menu",
        choices: ["Swap", "Add Liquidity", "Return Back"]
      }
    ]);

    if (choice === "Swap"){
        await SwapMenu(pool_id)
        await PoolMenu(pool_id);
    }else if(choice === "Add Liquidity"){
        console.log("Add Liquidity Menu");
    }
    else if(choice === "Return Back"){}
}

export default PoolMenu;