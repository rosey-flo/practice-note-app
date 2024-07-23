
const noteOutput = document.querySelector('.note-output');
const noteForm = document.querySelector('#note-form')

function outputNotes(noteObj) {
  noteOutput.insertAdjacentHTML('beforeend', `
    <div class="note">
      <h3>${noteObj.text}</h3>
      <a href="/note?note_id=${noteObj.id}">View Note</a>
    </div>
  `);
}




async function getNotes() {
  const res = await fetch('/api/notes');
  const notes = await res.json();

  noteOutput.innerHTML = '';
  // /note/2
  for (const noteObj of notes) {
  outputNotes(noteObj)
  }
}

async function saveNote (event) {
  event.preventDefault()
  // const textInput = document.querySelector('#text-input')
  const textValue = noteForm.noteText.value;

  const res = await fetch('./api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      noteText: textValue
    })
  });
  const newNote = await res.json();

  outputNotes(newNote)
}

function init() {
  getNotes();
noteForm.addEventListener('submit', saveNote)
}


init();
