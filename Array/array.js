// How we can add one array into another
var list = ['tiger', 'cut', 'bear', 'dog']
console.log(list.concat(['Bee', 'beer']))

OUTPUT: 
["tiger", "cut", "bear", "dog", "Bee", "beer"]


// CONCAT TWO ARRAY AND THEN SORT IT
var myList = ['tiger', 'cut', 'bear', 'dog']
var myNewList = myList.concat(['monkey'])

myNewList.sort()
console.log(myNewList)

OUTPUT:
 ["bear", "cut", "dog", "monkey", "tiger"]
