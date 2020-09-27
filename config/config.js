const { database } = require('./index');

module.exports = {
  "development": {
    "username": database.username,
    "password": database.password,
    "database": database.database,
    "host": database.host,
    "dialect": 'postgres'
  },
  "test": {
    "username": database.username,
    "password": database.password,
    "database": database.database,
    "host": database.host,
    "dialect": 'postgres'
  },
  "production": {
    "username": database.username,
    "password": database.password,
    "database": database.database,
    "host": database.host,
    "dialect": 'postgres'
  }
}
