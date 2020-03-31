
// differences between let and const, 
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
