
const todos = ['Buy food', 'Order cat food', 'Do the work', 'Clean Ketchin', 'Exercices'];

todos.forEach(function (item, index) {
    const num = index + 1;
    console.log(`${num}: ${item}`);
    //console.log(item);

})

/* 
 ---- OUTPUT ----
 
 1: Buy food
2: Order cat food
3: Do the work
4: Clean Ketchin
5: Exercices

*/
