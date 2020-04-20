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
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''

    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There is no to-dos to show'
        todoEl.appendChild(messageEl)
    }

}

// Get the DOM elements for individual note
const generateTodoDOM = (todo) => {
    // GENERATE THE DOM STRUCTURE
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderedTodos(todos, filters)
    })

    // setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)


    // setup the container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // sutup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')

    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodos(todo.id)
        saveTodos(todos)
        renderedTodos(todos, filters)
    })
    return todoEl
}

// GENERATE SUMMARY DOM
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? ' ' : 's'
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left.`
    summary.classList.add('list-title')
    return summary
}

