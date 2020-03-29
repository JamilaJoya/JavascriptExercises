
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook);  // OUTPUT: { title: '1984', author: 'George Orwell', pageCount: 326 }

console.log(`${myBook.title} by ${myBook.author}`);  // OUTPUT: 1984 by George Orwell

myBook.title = `Animal Farm`; // CHANGE OBJECT PROPERTY VALUE
console.log(`${myBook.title} by ${myBook.author}`);   // OUTPUT: Animal Farm by George Orwell


