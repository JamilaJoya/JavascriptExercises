
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

const index = notes.findIndex(function (note, index) {
    return note.title === 'Habbits to work on'
})

console.log(index);
// 1
