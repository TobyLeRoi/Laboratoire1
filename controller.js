const url = require('url');

exports.sum = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var x = parseFloat(reqUrl.query.x);
  var y = parseFloat(reqUrl.query.y);
  var op = reqUrl.query.op;
  var response;
  var queryLength = Object.keys(reqUrl.query).length;
  if(op == " "){
    reqUrl.query.op = "+";
  }
  if(queryLength > 3){
    response = [
      {
        "variable" : reqUrl.query,
        "message" : "too many variable"
      }
    ]
  }

  else if(isNaN(reqUrl.query.x) && isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : reqUrl.query.op,
        "message": "'x,y' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.x)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : reqUrl.query.op,
        "message": "'x' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : reqUrl.query.op,
        "message": "'y' is not a number",
      },
    ];  
  }
  else if(reqUrl.query.x == "" && reqUrl.query.y == ""){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : reqUrl.query.op,
        "message": "'x,y' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.x == ""){

    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : reqUrl.query.op,
        "message": "'x' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.y == ""){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : y,
        "op" : reqUrl.query.op,
        "message": "'y' parameter is missing",
      }
    ]
  }
  else{
      var answer = x + y;
      response = [
        {
          "x" : reqUrl.query.x,
          "y" : reqUrl.query.y,
          "op" : reqUrl.query.op,
          "message": answer,
        },
      ];  
    
  }
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.substract = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var x = parseFloat(reqUrl.query.x);
  var y = parseFloat(reqUrl.query.y);
  var op = reqUrl.query.op;
  var response;
  var queryLength = Object.keys(reqUrl.query).length;
  if(queryLength > 3){
    response = [
      {
        "variable" : reqUrl.query,
        "message" : "too many variable"
      }
    ]
  }
  else if(isNaN(reqUrl.query.x) && isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : op,
        "message": "'x,y' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.x)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : y,
        "op" : op,
        "message": "'x' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : x,
        "y" : reqUrl.query.y,
        "op" : op,
        "message": "'y' is not a number",
      },
    ];  
  }
  else if(reqUrl.query.x == "" && reqUrl.query.y == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'x,y' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.x == ""){

    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'x' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.y == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'y' parameter is missing",
      }
    ]
  }
  else{
      var answer = x - y;
      var response = [
        {
          "x" : x,
          "y" : y,
          "op" : op,
          "message": answer,
        },
      ];
  }

  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.multiplicate = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var x = parseFloat(reqUrl.query.x);
  var y = parseFloat(reqUrl.query.y);
  var op = reqUrl.query.op;
  var response;
  var queryLength = Object.keys(reqUrl.query).length;
  if(queryLength > 3){
    response = [
      {
        "variable" : reqUrl.query,
        "message" : "too many variable"
      }
    ]
  }

  else if(isNaN(reqUrl.query.x) && isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : op,
        "message": "'x,y' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.x)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : y,
        "op" : op,
        "message": "'x' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : x,
        "y" : reqUrl.query.y,
        "op" : op,
        "message": "'y' is not a number",
      },
    ];  
  }
  else if(reqUrl.query.x == "" && reqUrl.query.y == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'x,y' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.x == ""){

    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'x' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.y == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'y' parameter is missing",
      }
    ]
  }
  else{
      var answer = x * y;
      response = [
        {
          "x" : x,
          "y" : y,
          "op" : op,
          "message": answer,
        },
      ];  
    
  }
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.divide = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var x = parseFloat(reqUrl.query.x);
  var y = parseFloat(reqUrl.query.y);
  var op = reqUrl.query.op;
  var response;
  var queryLength = Object.keys(reqUrl.query).length;
  if(queryLength > 3){

  }

  else if(isNaN(reqUrl.query.x) && isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : op,
        "message": "'x,y' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.x)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : y,
        "op" : op,
        "message": "'x' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : x,
        "y" : reqUrl.query.y,
        "op" : op,
        "message": "'y' is not a number",
      },
    ];  
  }
  else if(reqUrl.query.x == "" && reqUrl.query.y == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'x,y' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.x == ""){

    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'x' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.y == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'y' parameter is missing",
      }
    ]
  }
  else{
    var answer = x / y;
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": answer,
      },
    ];  
  
}
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.modulo = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var x = parseInt(reqUrl.query.x);
  var y = parseInt(reqUrl.query.y);
  var op = reqUrl.query.op;
  var queryLength = Object.keys(reqUrl.query).length;
  if(queryLength > 3){
    var text = [];
    let extraInfo = {
    "op" : op,
    "message" : "too much parameter"
  }
    for(let i = 1 ; i < queryLength; i++){
      text.push({[keys[i]] : values[i]});
      if(i < queryLength - 2){
        text.push(extraInfo);
      }
    }
    response = text;
  }

  else if(isNaN(reqUrl.query.x) && isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : reqUrl.query.y,
        "op" : op,
        "message": "'x,y' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.x)){
    response = [
      {
        "x" : reqUrl.query.x,
        "y" : y,
        "op" : op,
        "message": "'x' is not a number",
      },
    ];  
  }
  else if(isNaN(reqUrl.query.y)){
    response = [
      {
        "x" : x,
        "y" : reqUrl.query.y,
        "op" : op,
        "message": "'y' is not a number",
      },
    ];  
  }
  else if(reqUrl.query.x == "" && reqUrl.query.y == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'x,y' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.x == ""){

    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'x' parameter is missing",
      }
    ]
  }
  else if(reqUrl.query.y == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'y' parameter is missing",
      }
    ]
  }
  else{
    var answer = x % y;
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": answer,
      },
    ];  
  
}
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.factoriel = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var n = parseInt(reqUrl.query.n);
  var queryLength = Object.keys(reqUrl.query).length;
  var op = reqUrl.query.op;
  var answer = 1;
  if(queryLength > 2){
    response = {
    "variable" : reqUrl.query,
    "message" : "too many parameter"
    }
  }

  else if(isNaN(reqUrl.query.n)){
    response = [
      {
        "n" : reqUrl.query.n,
        "op" : op,
        "message": "'n' is not a number",
      },
    ];  
  }
  else if(reqUrl.query.n == ""){
    response = [
      {
        "n" : n,
        "op" : op,
        "message": "'n' parameter is missing",
      }
    ]
  }
  else{
    for (let i = 1; i <= n; i++) {
      answer *= i;
    }
    response = [
      {
        "n" : n,
        "op" : op,
        "message": answer,
      },
    ];  
  
}
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.primeNumber = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var n = parseInt(reqUrl.query.n);
  var op = reqUrl.query.op;
  var queryLength = Object.keys(reqUrl.query).length;

  if(queryLength > 2){
    response = [
      {
        "variable" : reqUrl.query,
        "message" : "too many variable"
      }
    ]
  }

  else if(isNaN(reqUrl.query.n)){
    response = [
      {
        "n" : reqUrl.query.n,
        "op" : op,
        "message": "'n' is not a number",
      },
    ];  
  }
  else if(reqUrl.query.n == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'n' parameter is missing",
      }
    ]
  }
  else{
      if(isPrime(n)){
        answer = true;
      }
      else{
        answer = false;
      }
      response = [
        {
          "n" : n,
          "op" : op,
          "message": answer,
        },
    ];
  }
  
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

function isPrime(value){
      for (let i = 2; i < value; i++) {
        if(value % i == 0){ //vérifie si c'est divisible par tous les nombres jusqu'à zéro et si la division est entière
          return false;
        }
      }
      return true;
    }

function getNextPrime(n){
  for(var i = ++n; i < n*n; i++){
    if(isPrime(i)) return i;
  }
  return 0;
}
exports.nthPrime = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var op = reqUrl.query.op;
  var n = parseInt(reqUrl.query.n);

  var queryLength = Object.keys(reqUrl.query).length;

  if(queryLength > 2){
    var text = [];
    let extraInfo = {
    "op" : op,
    "message" : "too much parameter"
  }
    for(let i = 1 ; i < queryLength; i++){
      text.push({[keys[i]] : values[i]});
      if(i < queryLength - 2){
        text.push(extraInfo);
      }
    }
    response = text;
  }

  else if(isNaN(reqUrl.query.n)){
    response = [
      {
        "n" : reqUrl.query.n,
        "op" : op,
        "message": "'n' is not a number",
      },
    ];  
  }
  else if(reqUrl.query.n == ""){
    response = [
      {
        "n" : n,
        "op" : op,
        "message": "'n' parameter is missing",
      }
    ]
  }
  else{

    var count = 0 ;
    var number = 1;
    while(count++ != n){
      number = getNextPrime(number);
    }
    response = [
      {
        "n" : n,
        "op" : op,
        "message": number,
      },
    ];  
  }
  
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
exports.invalidUrl = function(req, res) {

  const reqUrl = url.parse(req.url, true)
  var x = parseFloat(reqUrl.query.x);
  var y = parseFloat(reqUrl.query.y);
  var op = reqUrl.query.op;
  var response;
  if(reqUrl.query.op == ""){
    response = [
      {
        "x" : x,
        "y" : y,
        "op" : op,
        "message": "'op' is missing",
      }
    ]
  }
  else{
      var response = [
        {
          "message": "Endpoint incorrect. Les options possibles sont "
        },
        availableEndpoints
      ]
    }
    res.statusCode = 404;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))

}
 
const availableEndpoints = [
  {
    method: "GET",
    sum: "/api/maths?op=+",
    substract: "/api/maths?op=-",
    multiplicate: "/api/maths?op=*",
    divide: "/api/maths?op=/",
    modulo: "/api/maths?op=%",
    factoriel: "/api/maths?op=!",
    primeNumber: "/api/maths?op=p",
    nthPrime: "/api/maths?op=np",
  },
]