// Get saved todos
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localstorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render todos application
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

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompeletedTodos))
    filterTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Generate todos DOM structures
const generateTodoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p

}

// Get the DOM element for list summary
const generateSummaryDOM = function (incompeletedTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompeletedTodos.length} todos left`
    return summary
}