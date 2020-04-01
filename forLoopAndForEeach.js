
const todos = ['Buy food', 'Order cat food', 'Do the work', 'Clean Ketchin', 'Exercices'];

// forEach METHOD
 todos.forEach(function (item, index) {
    const num = index + 1;
    console.log(`${num}: ${item}`);

}) 

// SIMPLE FOR LOOP
for (let count = 0; count <= todos.length-1; count++) {
    console.log(`${count + 1}: ${todos[count]}`);
}

// RESULT IS THE SAME
/* 

forEach OUTPUT
1: Buy food
2: Order cat food
3: Do the work
4: Clean Ketchin
5: Exercices

for loop OUTPUT
1: Buy food
2: Order cat food
3: Do the work
4: Clean Ketchin
5: Exercices

*/


