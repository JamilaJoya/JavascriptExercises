// How to calculate tip amount and the total.
// as input we have two arguments, amount and the tip percentage
// .1 is 10 percent
// .2 is 20 percent and so on

let getTip = function(amount, tipPercent) {
  let tip = amount * tipPercent;
  let total = tip + amount;
  console.log(tip);
  console.log(total);
};

getTip(100, 0.2); // tip amount = 20 , total = 120
getTip(100, 0.1); // tip amount = 10 , total = 110
