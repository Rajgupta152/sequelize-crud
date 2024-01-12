const {sequelize, DataTypes} = require("sequelize");
const mysql = require("../helpers/mysql/connect");

const bookModel = mysql.define("test_book",{
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATE
    },
});

mysql.sync().then(() => {
    console.log("book table created succesfully");
}).catch((err) => {
    console.log("Unable to create table", err);
});

module.exports = bookModel;