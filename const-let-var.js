
// differences between let and const, var


// let and const is a block based scope
/*
if (10 === 10) {
    let name = 'Ali';
}
console.log(name); // error, we dont have access to name inside if statement with let or const defination 
*/


// var is a function based scope 
if (10 === 10) {
    var secondName = 'Ahmad';
}
console.log(secondName); // still we have access to secondName inside of if statement

// const based variable can not reassign
// why using const instead of let? it is because readablity.
// we telling to the reader of the code that this is a variable who's values is never going to change.

const isRaising = true;
// isRaising = false; -- here error, we can not reassign the const variables
console.log(isRaising);

const person = {
    age: 27
}
// person = {}  -- error, we can not reassign an object

// if we have const objects, still we can modify it's properties
person.age = 28;
console.log(person);

// ------ var variables ----
// var is not going to use too much in these days development life.
var firstName = ' John';
console.log(firstName); // John

// here var is similer to let
firstName = 'Jen';
console.log(firstName); // Jen

// but here a big problem
// in an application, there is alot of possibility to define two or more variables with same name accidently
// with var we can not solve this problem.
var firstName = 'Mike';
console.log(firstName); // Mike: it prints Mike without a little complaint
