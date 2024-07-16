const inquirer = require('inquirer');

const addTodo = require('./addTodo.js')
const showIncompleteTodos = require('./showIncompleteTodos.js')
const showCompletedTodos = require('./showCompletedToDos.js')


function showMainMenu() {
  return inquirer.prompt({
    name: 'menuChoice',
    message: 'Please select an option',
    // Output a list of options - the user can select one
    type: 'list',
    choices: [
        'Show Incomplete TODOs', 
        'Show Completed TODOs', 
        'Add a ToDo', 
        'Mark a TODO complete', 
        'Exit'
    ]
    
  })
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
      case "Show Completed TODOs":
          showCompletedTodos()
          .then(showMainMenu)
          break;
      case 'Exit':
          console.log('========\nThank you for using BlackPad!\n===========')
          process.exit();
    }


  })
}

module.exports = showMainMenu