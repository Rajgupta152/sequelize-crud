const sequelize = require("sequelize");
require("dotenv").config();

const mysql = new sequelize(
    process.env.CL_API_MYSQL_DATABASE,
    process.env.CL_API_MYSQL_USER,
    process.env.CL_API_MYSQL_PASSWORD,
    {
        host: process.env.CL_API_MYSQL_HOST,
        dialect: 'mysql'
    }

);

mysql.authenticate().then(() => {
    console.log("Connection has been established successfully.");
}).catch((err) => {
    console.log("Unable to connect to the database:", err);
});

module.exports = mysql;
