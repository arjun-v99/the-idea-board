const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("ideas", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: { type: Sequelize.STRING(280), allowNull: false },
  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    autoIncrement: false,
  },
});

module.exports = User;
