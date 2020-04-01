
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

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMach = note.title.toLowerCase().includes(query)
        const isBodyMach = note.body.toLowerCase().includes(query)
        return isTitleMach || isBodyMach
    })
}

console.log(findNotes(notes, 'work'));

// OUTPUT
 /*
 
 
  {
    title: 'Habbits to work on',
    body: 'Exercise, eating a bit better'
  }

 */
