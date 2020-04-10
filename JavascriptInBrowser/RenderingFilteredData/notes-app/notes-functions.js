
// Read existing notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// REMOVE A NOTE FROM THE LIST
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate note DOM Structure
const generateNoteDOM = function (note) {
    // Geneerate structure for DOM note
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // set the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderedNotes(notes, filters)
    })

    // set up note title text
    if (note.title > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    noteEl.appendChild(textEl)
    return noteEl

}

// Render applications notes
const renderedNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    filterNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}
