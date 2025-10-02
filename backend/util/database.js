const Sequelize = require("sequelize");

const sequelize = new Sequelize("ideasdb", "ideauser", "ideapass", {
  host: "db",
  dialect: "postgres",
});

module.exports = sequelize;
