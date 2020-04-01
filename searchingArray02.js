
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating a bit better'
}, {
    title: 'Office modification',
    body: 'Buy a new seat'
}];

// the result at the end of the day is the same
// we have two choice with find
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// second choice with findIndex()
/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
} */

const note = findNote(notes, 'office modification');
console.log(note);

// output
// { title: 'Office modification', body: 'Buy a new seat' }

