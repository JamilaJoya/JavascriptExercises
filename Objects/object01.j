var user = {
    name: 'John',
    age: 30,
    hobby: 'succer',
    isMarried: false,
    // Add an array as object property
    spells: ['first', 'second', 'last'],
    // Add a method to object: a function inside of an object is a method
    shout: function () {
        console.log('Ahhhhhhhhhhhhhhhhh')
    }
}

// Add new item to object
user.favouriteFood = 'Spinach'

//OUTPUT: age: 30, favouriteFood: "Spinach", hobby: "succer", isMarried: false, name: "John", shout: ƒ (), spells: (3) ["first", "second", "last"]
