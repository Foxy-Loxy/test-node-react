const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const parsingService = require('./services/parsing');

app.use(bodyParser.urlencoded({ extended: false }));

parsingService.startCroneJob();

app.get('/', (req, res) => {
  res.send('Hello World');
})


app.listen(3000, () => {
  console.log('listening')
})
