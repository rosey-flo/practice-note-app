const dbtools = require('../db/tools.js')


function showIncompleteTodos() {
    return dbtools.getTodos()
        .then(todosArray => {

            const filtered = todosArray.filter((todoObj) => {
                return !todoObj.completed;
            })

            for (const todo of filtered) {
                console.log(todo.text);
            }

            console.log("------\n")
        })
}

module.exports = showIncompleteTodos;