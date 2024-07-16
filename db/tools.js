const fs = require('fs').promises;

function getTodoData() {
    return fs.readFile('./db/todo.json', 'utf8')
        .then(rawData => {
            return JSON.parse(rawData)
        })
      .catch((error) => {
        console.log(error);
      });
  }

  function saveToDoData(updatedToDos) {
    return fs.writeFile('./db/todo.json', JSON.stringify(updatedToDos, null, 2))
}
//default export - overwriting the eport object with your own value
module.exports = {
    getTodos: getTodoData,
    saveTodos: saveToDoData
}