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
  tableName: 'Users',
})
