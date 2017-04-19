// The third module should require the other two modules (i.e. Module One and Module Two).
// It should also have two exported functions:
// The first function should call Module 2, passing the result of Module 1 as an argument.
// The second function should return the text “Account balance: \n”.

//get a module by using require()
var toDollars = require('./dollars');//exported toDollars
var randNumber = require('./randnum'); //exported a sendRand function, var randNumber is equal
//to function of randnum

var dollarBalance = {
  //send our movie data
   getBalance: function () {
    return 'Account balance: \n';
  },
  getDollars: function () {
   return toDollars (randNumber(100,1000000)); //return toDollar of random number
 }
};

module.exports = dollarBalance;
