const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.DATABASE_URL) {
  // Production: Use Railway's DATABASE_URL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Required for Railway PostgreSQL
      },
    },
    logging: false, // Disable logging in production (optional)
  });
} else {
  // Development: Use Docker values
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || "db",
      dialect: "postgres",
      logging: false,
    }
  );
}

module.exports = sequelize;
