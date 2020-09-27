const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const parsingService = require('./services/parsing');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
parsingService.startCroneJob();

app.use(userRoutes);

app.listen(config.port, () => {
  console.log('listening')
})
