const Sequelize = require("sequelize");

const sequelize = new Sequelize("ideasdb", "ideauser", "ideapass", {
  host: "localhost",
  dialect: "postgresql",
});

module.exports = sequelize;
