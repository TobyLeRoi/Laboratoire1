const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Matière à discussion
// https://stackoverflow.com/questions/21001455/should-a-rest-api-be-case-sensitive-or-non-case-sensitive
// https://blog.restcase.com/5-basic-rest-api-design-guidelines/



module.exports = http.createServer((req, res) => {
  var operation = require('./controller.js');
  const reqUrl =  url.parse(req.url, true);
  // GET endpoint
  if(req.method === 'GET' && reqUrl.query.op == " ") {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.sum(req, res);
  }
  else if(req.method === 'GET' && reqUrl.query.op == "-") {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.substract(req, res);
  }
  else if(req.method === 'GET' && reqUrl.query.op == "*") {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.multiplicate(req, res);
  }
  else if(req.method === 'GET' && reqUrl.query.op == "/") {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.divide(req, res);
  }
  else if(req.method === 'GET' && reqUrl.query.op == "%") {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.modulo(req, res);
  }
  else if(req.method === 'GET' && reqUrl.query.op == "!") {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.factoriel(req, res);
  }
  else if(req.method === 'GET' && reqUrl.query.op == "p") {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.primeNumber(req, res);
  }
  else if(req.method === 'GET' && reqUrl.query.op == "np") {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.nthPrime(req, res);
  }
 else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    operation.invalidUrl(req, res);
  }
})

//