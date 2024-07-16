const inquirer = require('inquirer');

const dbtools = require('../db/tools.js')


function showCompletedTodos() {
    return dbtools.getTodos()
        .then(todosArray => {

            const filtered = todosArray.filter((todoObj) => {
                return !todoObj.completed;

            })
            if (!filtered.lenght) {
                return console.log('There are no complete todos\n')
            }
            return inquirer.prompt({
                name: 'incompleteTodos',
                message: 'Check any TODOs that you would like to mark as complete',
                type: 'checkbox',
                choices: filtered.map(todoObj => {
                    return {
                        name: todoObj.text,
                        value: todoObj.id
                    }
                })
            }).then(completedAnswerObj => {
                const checkedArray = completedAnswerObj.incompleteTodos;
                for (const todoObj of todosArray) {
                    if (!checkedArray.length) {
                        return;
                    }
                    if (checkedArray.includes(todoObj.id)) {
                        todoObj.completed = false;
                    }
                }
                return dbtools.saveTodos(todosArray)
            })

        })
}

module.exports = showCompletedTodos;