const paragraphs = document.querySelectorAll('p')

// HOW TO REMOVE ELEMENTS IN JAVASCRIPT FROM HTML
paragraphs.forEach(function (p) {
    if (p.textContent.toLowerCase().includes('the')) {
        p.remove()
    }
})

// How to add an element form javascript to html
// FIRST CREATE THAT ELEMENT
const newParagraph = document.createElement('p')

// ADD VALUE TO IT
newParagraph.textContent = 'this is the new paragraph from javascript'

// ADD ELEMENT TO THE HTML
document.querySelector('body').appendChild(newParagraph);

// IF WANT  TO REMOVE ONLY ONE ELEMENT, DONT TO NEED TO USE THE FOREACH METHOD. 
/* 
const paragraph = document.querySelector('p')
        paragraph.remove()
*/
