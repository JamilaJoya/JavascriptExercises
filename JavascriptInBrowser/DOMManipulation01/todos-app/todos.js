const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (p) {
    if (p.textContent.toLowerCase().includes('the')) {
        p.remove()
    }
})

