import AuthManager from "./src/managers/auth-manager.js";
import inquirer from "inquirer";
import MainMenu from "./src/menus/MainMenu.js";

console.log("Hello, Welcome to ITUChain!");

async function startApp() {
  if (AuthManager.isLoggedIn()) {
    console.log("You are already logged in!");
    await MainMenu();
  } else {
    console.log("You have to initialize your wallet first!");

    // Kullanıcıdan secret phrase isteme
    const { phraseKey } = await inquirer.prompt([
      {
        type: "input",
        name: "phraseKey",
        message: "Enter your secret phrase:",
      },
    ]);

    const loggedIn = AuthManager.login(phraseKey);

    if (loggedIn) {
      console.log("Wallet successfully initialized!");
      await MainMenu(); 
    } else {
      console.log("Invalid wallet phrase key. Initialization failed.");
      process.exit(1);
    }
  }
}

// Uygulamayı başlat
startApp().catch((err) => {
  console.error("An error occurred:", err);
  process.exit(1);
});
