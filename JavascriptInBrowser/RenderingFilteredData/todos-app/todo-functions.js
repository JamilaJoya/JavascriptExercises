'use strict'

// for testing purposes

// GET SAVED TODOS
const getSavedTodo = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// SAVE TODOS IN LOCALSTORAGE
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// REMOVE A TODO BY ID
const removeTodos = (id) => {
    const todosIndex = todos.findIndex((todo) => todo.id === id)

    if (todosIndex > -1) {
        todos.splice(todosIndex, 1)
    }
}

// toggle the completed value for given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}
// RENDER APPLICATION TODOS BASED ON FILTERS
const renderedTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for individual note
const generateTodoDOM = (todo) => {
    // GENERATE THE DOM STRUCTURE
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const button = document.createElement('button')

    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderedTodos(todos, filters)
    })

    // setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // sutup the remove button
    button.textContent = 'x'
    todoEl.appendChild(button)
    button.addEventListener('click', () => {
        removeTodos(todo.id)
        saveTodos(todos)
        renderedTodos(todos, filters)
    })
    return todoEl
}

// GENERATE SUMMARY DOM
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}

