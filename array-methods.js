// Manipulating arrays with built up methods

const notes = ['note1', 'note2', 'note3'];
// OUTPUT: [ 'note1', 'note2', 'note3' ]

//notes.push('New push note');
// OUTPUT: [ 'note1', 'note2', 'note3', 'New push note' ]

//notes.pop();
// OUTPUT: [ 'note1', 'note2' ]

// --- ADD AND REMOVE ITEMS FROM THE START OF ARRAY -----
//notes.shift();
// OUTPUT:  [ 'note2', 'note3' ]

//notes.unshift('New UNSHIF note');
// OUTPUT: [ 'New UNSHIF note', 'note1', 'note2', 'note3' ]


//notes.splice(1, 1); // remove NOTE2
// OUTPUT: [ 'note1', 'note3' ]

//notes.splice(1, 0, 'new SPLICE note') 
// OUTPUT: [ 'note1', 'new SPLICE note', 'note2', 'note3' ]


// notes.splice(1, 1, 'RAPLACED'); // replace new item
// OUTPUT: [ 'note1', 'RAPLACED', 'note3' ]


notes[1] = 'ASSIGNED';
// OUTPUT: [ 'note1', 'ASSIGNED', 'note3' ]

console.log(notes);
console.log(notes.length);

