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

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderedTodos = function (todos, filters) {
    const filterTodos = todos.filter(function (todo, index) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideComletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideComletedMatch
    })


    const incompeletedTodos = filterTodos.filter(function (todo) {
        return !todo.completed
    })
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompeletedTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filterTodos.forEach(function (todo) {
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.text
        document.querySelector('#todos').appendChild(todoElement)
    })
}

renderedTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderedTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderedTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderedTodos(todos, filters)
})






















