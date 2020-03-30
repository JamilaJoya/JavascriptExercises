// passing object to a function
// what happens if we pass objects around our program
// what happens to the orignal object if we modify the arguments in functions
// for example here we have an account manager, we have a function that add the expenses into account
// in this function, take the account and the expenses amount as default
// when we passing an object in a function, we can manipulate its property.


let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount; // this also make binding. 
otherAccount.income = 1000; // if i change the otherAccount, it would change the main objects
otherAccount = {} // this aslo is not going to work. we only can change its property

let addExpenses = function (acount, amount) {
    //acount = {} // this do nothing to the main object
    // now account doe's not point to the same acount in my object
    // can't  not use the = assign in function to clear the objects like account = {}
    // because we only can change the property of the object

    acount.expenses = acount.expenses + amount;
    //console.log(acount);
    // here the output is the same as ouside of this function
    // acount is a pointer to the object myAccount
    // here acount argument is a reference to the exact same object in memory
    // changing one, means changing both since they point to the exact same memory
}
addExpenses(myAccount, 2.5);
console.log(myAccount); // the same output: { name: 'Andrew Mead', expenses: 2.5, income: 1000 }

// if we assign a new value to that argument, we completly break this binding


