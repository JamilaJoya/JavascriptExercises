
document.querySelector('#create-note').addEventListener('click', function (e) {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = 'paragaraph was create by button'
    document.querySelector('body').appendChild(newParagraph)
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'this is the new paragraph from the javascript.'
document.querySelector('body').appendChild(newParagraph)

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('p').forEach(function (note) {
        note.remove()
    })
})


/*

const newParagraph = document.createElement('p')
newParagraph.textContent = 'this is the new paragraph from the javascript.'
document.querySelector('body').appendChild(newParagraph)
*/

/*
// query based on location, but here is a big problem,
// this is not a good solution
document.querySelectorAll('button')[1].addEventListener('click', function () {
    console.log('delete all the notes.')
})

const p = document.querySelector('p')
p.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = "*********"
});
 */