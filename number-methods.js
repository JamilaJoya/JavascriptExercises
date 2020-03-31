// toFixed
// Math.random(), Math.round(), Math.floor(), Math.ceil()

let num = 105.943;
console.log(num.toFixed(2)); // 105.94

console.log(Math.round(num)); // 106
console.log(Math.floor(num)); // 105
console.log(Math.ceil(num)); // 106

let min = 10;
let max = 20;

let randomNumber = Math.floor(Math.random() * (max - min + 1) + min); // Random number between 10 - 20
console.log(randomNumber);

// Function that take a guis number and campare it with the random number
// Return true if it is correct, return false if it is not correct

let makeGuis = function (number) {
    let min = 1;
    let max = 5;
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNumber);
    return randomNumber === number;
}

console.log(makeGuis(3));
