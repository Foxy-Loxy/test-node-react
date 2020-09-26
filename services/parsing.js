const db = require('../models');
const request = require('request-promise');
const {Op} = require("sequelize");
const config = require('../config');

const getLatestPrice = async () => {
  const options = {
    method: 'GET',
    url: `https://ethgasstation.info/api/ethgasAPI.json?api-key=${config.ethApiKey}`,
    json: true
  };
  try {
    const response = await request(options)
    console.log(response);
    await db.Price.create({price: response.average})
  } catch (e) {
    console.log(e);
  }
}

const getUsdCurrency = async () => {
  const options = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`,
    json: true
  };
  const response = await request(options);
  return response.ethereum.usd;
}

const compareLatestPrice = async () => {
  try {
    const currentCurrency = getUsdCurrency();
    const getLastRecord = await db.Price.findOne({
      order: [['created_at', 'DESC']],
    });
    const ethToUsd = currentCurrency * getLastRecord;

    const usersToUpdate = await db.User.findAll({
      where: {
        price: {
          [Op.gt]: ethToUsd
        },
        isSent: false,
      }
    })
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  compareLatestPrice, getLatestPrice
}
