module.exports = (sequelize, DataTypes) => sequelize.define('Price', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  price: {
    type: DataTypes.INTEGER,
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
