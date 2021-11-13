const express = require('express');
const bodyParser = require('body-parser')
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
  mathHistory.push(req.body);
  res.sendStatus(201);
});


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});

