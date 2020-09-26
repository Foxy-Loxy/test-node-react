const db = require('../models');
const parsingService = require('../services/parsing');

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const subscription = async (req, res) => {
  const { email, price } = req.body;
  if (!validateEmail(email)) {
    res.status(400).send('invalid email');
    return;
  }

  if (isNaN(+price)) {
    res.status(400).send('invalid price');
    return;
  }
  try {
    await  db.User.upsert({email, price});
    await parsingService.getLatestPrice();
    await parsingService.comparePriceForUser({email, price})
  } catch (e) {
    res.status(500).send('something went wrong =(');
  }
}


module.exports = {
  index,
  subscription
}
