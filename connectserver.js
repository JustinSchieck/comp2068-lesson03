/**
* @Author: Justin Schieck
* @Date:   2017-01-25T12:54:27-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-01-25T13:22:38-05:00
*/

//link to the connect package
let connect = require('connect');

// creat a new instance of a connect application
let app = new connect();

// hello function
let hello = function(req, res, next){
    res.end('hello');
};

let goodbye = function(req,res,next){
  res.end('goodbye');
};
let index = function(req,res,next){
  res.end('Home / Index');
};
let tax = function(req,res,next){
  res.send('tax.js');
}

//route the urls to the correct function
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/', index);
app.use('/tax', tax);

//start the server on port 3000
app.listen(3000);
console.log('connect running on port 3000');
