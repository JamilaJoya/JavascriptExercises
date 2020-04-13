
// MAIN DIFFRENCESS BETWEEN ARROW FUNCTIONS AND REGULAR FUNCTIONS
// 1. ARROW FUNCTIONS DONT BIND ARGUMENTS AND DONT BIND THIS KEYWORD
// 2. ARROW FUNCTIONS COME WITH ADVANCED SHORTHAND SYNTAX

// IN REGULAR
const add = function () {
    //return arguments // OUTPUT: { '0': 11, '1': 22, '2': 33, '3': 54 }
    return arguments[0] + arguments[1] // OUTPUT: 33
}
// IN MOST CASES WE DO NOT USE ARGUMENTS
console.log(add(11, 22, 33, 54))

// BUT IN ARROW FUNCTIONS IT DOES NOT WORK. 
// ARROW FUNCTIONS DONT BIND THIS VALUE

// second difference arrow functions and regular functions
const car = {
    color: 'red',
    getSummary: function () {
        return `the car is ${this.color}.`
    }
}
console.log(car.getSummary()) //the car is red.

// now in arrow function 'this' is not bound
const car = {
    color: 'red',
    getSummary: () => {
        return `the car is ${this.color}.`
    }
}
console.log(car.getSummary()) //the car is undefined 

// this is the solution
const car = {
    color: 'red',
    getSummary() {
        return `the car is ${this.color}.`
    }
}
console.log(car.getSummary()) //the car is red


