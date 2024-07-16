const inquirer = require('inquirer'); 
const uuid = require('uuid');

const dbtools = require('../db/tools')


function addTodo() {
    // Get the todo text from the user
    return inquirer.prompt({
      name: 'todoText',
      message: 'Type the text for your ToDo',
    }).then((addTodoAnswerObj) => {
      // Get the data from the todos.json file
     return dbtools.getTodos()
        .then(toDosArray => {
          const todoObj = {
              id: uuid.v4(),
              text: addTodoAnswerObj.todoText,
              completed: false
          }
         toDosArray.push(todoObj);
         return dbtools.saveTodos(toDosArray)
         .then(() => {
  
          console.log('To do saved successfully')
         })
        })
      // Add the todo to a database
    })
  
  }
  module.exports = addTodo;