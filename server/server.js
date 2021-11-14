const express = require('express');
const bodyParser = require('body-parser');
const first = require('ee-first');
const app = express();
const PORT = 5000;
const mathHistory = [];

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('server/public'));


app.get('/calculator', (req, res) => {
  console.log('in GET /calculator');
  res.send(mathHistory);
});

app.post('/calculator', (req, res) => {
  console.log('in POST /calculator');
  console.log('req.body', req.body);
  //mathHistory.push(req.body);
  let result = doMath(Number(req.body.first), req.body.op, Number(req.body.second));
  console.log(result);
  mathHistory.push({
    first: req.body.first,
    op: req.body.op,
    second: req.body.second,
    result: result
  })
  res.sendStatus(201);
});

function doMath(numOne, op, numTwo)   {
  switch (op) {
      case "+": 
          return numOne + numTwo;
      case "-":
          return numOne - numTwo;
      case "*":
          return numOne * numTwo;
      case "/":
          return numOne / numTwo;
      default: 
          return;
  }
}

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});

