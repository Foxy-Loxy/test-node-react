module.exports = (sequelize, DataTypes) => sequelize.define('Price', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  price: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    field: 'updated_at',
    allowNull: false,
    type: DataTypes.DATE
  },
}, {
  timestamps: true,
  tableName: 'Prices',
})
