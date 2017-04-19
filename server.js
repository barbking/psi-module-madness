// The third module should require the other two modules (i.e. Module One and Module Two).
// It should also have two exported functions:
// The first function should call Module 2, passing the result of Module 1 as an argument.
// The second function should return the text “Account balance: \n”.

var http = require('http');  //get a module by using require()
var dollarbalance = require('./dollarbalance');//exported an object

http.createServer(function (reg,res){
  //response you will see, for example from movie, body of resonse is movie list
   //data represents data exported, type node in terminal to see this
  res.writeHead(200); //Write to Head, 200 is good, 500 is bad
  res.write(dollarbalance.getBalance());
  res.write(dollarbalance.getDollars());
  res.end(); //end is just ok to sen it
}).listen(3000);//only listening to requests on 3000, localhost our computer, 3000 port
// we care about
