'use strict'

let todos = getSavedTodo()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderedTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderedTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)

    renderedTodos(todos, filters)
    e.target.elements.text.value = ''

})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderedTodos(todos, filters)
})

