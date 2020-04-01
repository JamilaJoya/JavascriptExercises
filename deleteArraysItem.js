// FIRST FIND THE INDEX OF ITEM, THEN DELETE THAT

const todos = [{
    text: 'Buy food',
    completed: true
}, {
    text: 'Order cat food',
    completed: true
}, {
    text: 'Do the work',
    completed: false
}, {
    text: 'Clean ketchin',
    completed: true
}, {
    text: 'Exercises',
    completed: true
}];

const deleteTodo = function (todos, textTodo) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === textTodo.toLowerCase();
    })
    if (index > -1) {
        todos.splice(index, 1);
    }
}

deleteTodo(todos, 'order cat food');
console.log(todos)

