module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  isSent: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING(256),
    allowNull: false,
  }
}, {
  tableName: 'Users',
})
