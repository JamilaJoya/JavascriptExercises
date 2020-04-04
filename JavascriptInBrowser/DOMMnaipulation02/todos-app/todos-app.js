const paragraphs = document.querySelectorAll('p')

// Filter Elements and remove them
paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.toLowerCase().includes('the')) {
        paragraph.remove()
    }

})


// Adding new h1 element to html
const newHeader = document.createElement('h1') // Create
newHeader.textContent = ' this is the new header from javascript' // update
document.querySelector('body').appendChild(newHeader) // add
