
var todos = [
    "clean the room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
]

// for loops
for (var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!"
    console.log(todos[i], i)

}

// forEach loop
todos.forEach(function (todo, i) {
    console.log(todo, i)
})

// while loop
var counterOne = 0
while (counterOne <= 5) {
    console.log(counterOne)
    counterOne++
}


// do loop
var counterTwo = 10
do {
    console.log(counterTwo)
    counterTwo--
} while (counterTwo > 0)

