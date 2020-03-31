// length, toUpperCase, toLowerCase, includes, trim,  and a function to check the password validation

let name = '    Andrew Mead';
console.log(name.length); // 15: character + white spaces

console.log(name.toUpperCase()); //   ANDREW MEAD
console.log(name.toLowerCase());//    andrew mead

let password = 'abc123password089';
console.log(password.includes('password')); // check if the word 'password' is in the string: true

console.log(name.trim()); // remove white spaces from string both ends
//andrew mead

let isValidPassword = function (password) {
    return password.length > 8 && (!password.includes('password'));
}

console.log(isValidPassword('123ac1')); // false
console.log(isValidPassword('123dfkh@#28$')); // true
console.log(isValidPassword('123dfhdfhdbf#$%password')); // false

