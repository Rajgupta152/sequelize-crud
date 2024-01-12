const Book = require("../../model/book.model");


const createTableRecords = () => {
    console.log("Book controllers");
    sequelize.sync().then(() => {
        console.log('Book table created successfully!');
     
        Book.create({
            title: "Clean Code",
            author: "Robert Cecil Martin",
            release_date: "2021-12-14",
            subject: 3
        }).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}

module.exports = createTableRecords;