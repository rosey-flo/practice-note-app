const express = require('express');
const path = require('path')


const app = express();

//MIDDLEWARE - adding a layer to the server onion or removing from the onion

app.use(express.static('./public'));
///other routes must be below middleware

app.get('/about', (requestObj, responseObj) => {
    responseObj. sendFile(path.join(__dirname, './public/about.html'))
    
})


app.get('*', (requestObj, responseObj) => {
    responseObj. sendFile(path.join(__dirname, './public/notfound.html'))
})

app.listen(3333, ()=> {
console.log('Server started');
});