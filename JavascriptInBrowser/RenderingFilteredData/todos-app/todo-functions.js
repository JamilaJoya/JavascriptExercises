// GET SAVED TODOS
const getSavedTodo = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// SAVE TODOS IN LOCALSTORAGE
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// RENDER APPLICATION TODOS BASED ON FILTERS
const renderedTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// GENERATE TODO DOM structure
const generateTodoDOM = function (todo) {
    // GENERATE THE DOM STRUCTURE
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')


    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    // setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // sutup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    return todoEl
}

// GENERATE SUMMARY DOM
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}