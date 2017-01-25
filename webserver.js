//reference the http library that ships with node
var http = require('http');

//start an http server asynchronously
http.createServer(function(request, response) {

  response.writeHead(200);
  response.write('<h1><marquee>Your an ass!</marquee></h1>');
  response.end();

}).listen(3000);

//displays a message to the console
console.log('Server running on port 3000');
