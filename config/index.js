const dotenv = require('dotenv');

dotenv.config({path: '../.env'});

module.exports = {
  env: process.env.NODE_ENV,
  host: process.env.HOST,
  port: process.env.PORT,
  database: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres'
  },
  gridApiKey: process.env.GRID_API_KEY,
  ethApiKey: process.env.ETH_API_KEY,
  email: process.env.EMAIL_ADDRESS,
};
