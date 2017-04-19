// The second module should accept a number and convert it to a USD value.

function toDollars (number){
  number = number.toFixed(2);
  var dollars = '$'+number;
  return dollars;
}

module.exports = toDollars;
