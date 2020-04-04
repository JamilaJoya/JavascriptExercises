const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.toLowerCase().includes('the')) {
        paragraph.remove()
    }

})