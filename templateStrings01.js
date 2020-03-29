// This example, shows template literals(template strings)
// Instead of ' ' quotation use ` `.
// In this case we don't need concatenation + and maintaining is too simple


let getTip = function (total, tipPercent = 0.2) {
  return `a ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`; 
  
  // see below,  this one is to hard to write and to maintain.
  // return 'a %' + tipPercent + 'tip on $'+ total + ' would be $' + total * tipPercent; 
};

let tip = getTip(40, 0.25);
console.log(tip); 

// output:  a 25% tip on $40 would be $10
