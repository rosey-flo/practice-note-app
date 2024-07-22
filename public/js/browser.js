const noteOutput = document.querySelector('.note-output')


async function getNotes() {
    const res = await fetch('/api/notes');
    const notes = await res.json();

    for (const noteObj of notes) {
        noteOutput.insertAdjacentHTML('beforeend', `
        <div class="note">
            <h3>${noteObj.text}</h3>
            <a href='/note?note_id=${noteObj.id}'>View Notes</a>
        </div>
        `);
    }

}


function init() {
    getNotes();
}

init();