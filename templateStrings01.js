// This example, shows template literals(template strings)
// Instead of ' ' quotation use ` `. instead of + variableName use just ${variableName} 
// 'Name ' + name  --> `Name'${name}
// In this case we don't need concatenation + and maintaining is too simple


let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`; 
  
  // see below,  this one is to hard to write and to maintain.
  // return 'a %' + tipPercent + 'tip on $'+ total + ' would be $' + total * tipPercent; 
};

let tip = getTip(40, 0.25);
console.log(tip);  // output: A 25% tip on $40 would be $10

// In case if use default tip percentage .2, then only provide the amount. ex $60 
//let tip = getTip(60);
// output: A 20% tip on $60 would be $12

