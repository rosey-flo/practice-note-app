
const outputDiv = document.querySelector('.note');

const params = new URLSearchParams(window.location.search)
const noteId = params.get('note_id')

console.log(noteId)


async function getNote() {
    const res = await fetch('/api/note/' + noteId)
    const data = await res.json();


    outputDiv.innerHTML = `
    <h2>${data.text}</h2>
    `
}