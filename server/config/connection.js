const Sequelize = require("sequelize");
require("dotenv").config(); //load configuration from the .env file


//Initialize the sequelize and set up the connection to a db
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
    }
  );
}

module.exports = sequelize;
