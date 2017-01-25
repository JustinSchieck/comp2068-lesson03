/**
* @Author: Justin Schieck
* @Date:   2017-01-25T13:13:55-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-01-25T13:34:36-05:00
*/

let http = require('http');
let url = require('url');
let accounting = require('accounting');

http.createServer(function(request, response){
//get the whole querystring (parameter list) ?amount=100
  let qs = url.parse(request.url, true).query;
  let amount = qs.amount;

  // calculate tax and total
  let hst = parseFloat(amount) * .13;
  let total = parseFloat(amount) + parseFloat(hst);

  //display all 3 values on the page
  response.write('Amount: '+ accounting.formatMoney(amount) +'\n' + 'HST: ' + accounting.formatMoney(hst) + '\n' + 'Total: '+ accounting.formatMoney(total) + '\n');
  response.end();

}).listen(3000);

console.log('Tax server running on port 3000');
