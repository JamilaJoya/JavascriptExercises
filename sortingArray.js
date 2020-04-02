
const todos = [{
    text: 'Buy food',
    completed: true
}, {
    text: 'Order cat food',
    completed: false
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

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1;
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}
sortTodos(todos);
console.log(todos);

/*
OUTPUT

[
  { text: 'Order cat food', completed: false },
  { text: 'Do the work', completed: false },
  { text: 'Buy food', completed: true },
  { text: 'Clean ketchin', completed: true },
  { text: 'Exercises', completed: true }
]

*/


