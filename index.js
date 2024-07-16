
const showMainMenu = require('./lib/showMainMenu.js')


function init() {
  // Show a welcome message
  console.log(`
  -----------
  Welcome to the ToDo Wiz
  -----------
  `);

  // Show the menu options
  showMainMenu()
  
}

init();
