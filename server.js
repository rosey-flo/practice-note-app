const express = require('express');
const path = require('path')


const app = express();
const notes = [
    {
        id: 1,
        text: 'note one'
    },
    {
        id:2,
        text: 'note two'
    }
]

//MIDDLEWARE - adding a layer to the server onion or removing from the onion

app.use(express.static('./public'));
///other routes must be below middleware



//view routes
app.get('/about', (requestObj, responseObj) => {
    responseObj. sendFile(path.join(__dirname, './public/about.html'))
    
})




//API ROUTES
app.get('/notes', (requestObj, responseObj) => {
    responseObj. json(notes)
    
})
app.get('/api/note', (requestObj, responseObj) => {
    // const Id = requestObj.query.note_id
     responseObj. sendFile(path.join(__dirname, './public/note.html'))
    })
    
app.get('/api/note:noteId', (requestObj, responseObj) => {
    const Id = requestObj.params.noteId
    const note = notes.find(noteObj => noteObj.id == Id);

    
    responseObj.json(note || {})
})

    


app.get('*', (requestObj, responseObj) => {
    responseObj. sendFile(path.join(__dirname, './public/notfound.html'))
})

app.listen(3333, ()=> {
console.log('Server started');
});