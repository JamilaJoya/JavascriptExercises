const todos = [{
    text: 'Walk the dog',
    completed: true

}, {
    text: " Order cat food",
    completed: true

}, {
    text: 'Do the work',
    completed: false

}, {
    text: 'Clean ketchin',
    completed: false

}, {
    text: 'Buy food',
    completed: true

}]

const h1H = document.createElement('h1')
h1H.textContent = 'Todos App'
document.querySelector('body').appendChild(h1H)


const incompletedTodos = todos.filter(function (todo, index) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompletedTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todos, index) {

    const p = document.createElement('p')
    p.textContent = todos.text
    document.querySelector('body').appendChild(p)

})























/* // filter element and remove them
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.toLowerCase().includes('the')) {
        paragraph.remove()
    }
})

// Adding new h1 to html
const newHeader = document.createElement('h1')
newHeader.textContent = ' this is the new header from javascript'
document.querySelector('body').appendChild(newHeader) */