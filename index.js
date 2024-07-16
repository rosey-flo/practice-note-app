const inquirer = require('inquirer'); // Default import - That value from the package files that you are importing is not exported through an export object
const dbtools = require('./db/tools.js')
const addTodo = require('./lib/addTodo.js')
const showIncompleteTodos = require('./lib/showIncompleteTodos.js')


function showMainMenu() {
  return inquirer.prompt({
    name: 'menuChoice',
    message: 'Please select an option',
    // Output a list of options - the user can select one
    type: 'list',
    choices: [
        'Show Incomplete TODOs', 
        'Showe completed TODOs', 
        'Add a ToDo', 
        'Mark a TODO complete', 
        'Exit'
    ]
  });
}



function init() {
  // Show a welcome message
  console.log(`
  -----------
  Welcome to the ToDo Wiz
  -----------
  `);

  // Show the menu options
  showMainMenu()
    .then((menuAnswerObj) => {
      switch (menuAnswerObj.menuChoice) {
        case 'Add a ToDo':
            addTodo()
                .then(showMainMenu);
            break;
        case "Show Incomplete TODOs":
            showIncompleteTodos()
                .then(showMainMenu);
            break;
        case 'Exit':
            console.log('Thank you for using BlackPad!')
            process.exit
      }


    })
}

init();
