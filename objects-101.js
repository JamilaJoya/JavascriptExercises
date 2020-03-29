
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook);  // OUTPUT: { title: '1984', author: 'George Orwell', pageCount: 326 }

console.log(`${myBook.title} by ${myBook.author}`);  // OUTPUT: 1984 by George Orwell

myBook.title = `Animal Farm`; // CHANGE OBJECT PROPERTY VALUE
console.log(`${myBook.title} by ${myBook.author}`);   // OUTPUT: Animal Farm by George Orwell


// Lets have the second object of a person

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
// OUTPUT: Andrew is 27 and lives in Philadelphia.
person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
// OUTPUT: Andrew is 28 and lives in Philadelphia.
