const express = require('express');
const path = require('path');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const parsingService = require('./services/parsing');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'front/build')));
parsingService.startCroneJob();

app.use(userRoutes);

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/front/build/index.html'));
});


app.listen(config.port, () => {
  console.log('listening')
})
