/** Created by Justin Schieck on 1/25/2017**/

//declare and fill a variable
let message = 'Hello World';

// create a function and make it public using the "exports" keyword
exports.sayHello = function(){
  console.log(message);
}
