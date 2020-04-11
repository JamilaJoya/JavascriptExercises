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

// REMOVE A TODO FROM THE LIST
const removeTodos = function (id) {
    const todosIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todosIndex > -1) {
        todos.splice(todosIndex, 1)
    }
}

// toggle the completed value for given todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
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
    const button = document.createElement('button')

    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
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
    button.addEventListener('click', function () {
        removeTodos(todo.id)
        saveTodos(todos)
        renderedTodos(todos, filters)
    })
    return todoEl
}

// GENERATE SUMMARY DOM
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}