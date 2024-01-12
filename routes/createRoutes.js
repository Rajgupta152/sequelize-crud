const express = require("express");
const router = express.Router();
const bookModel = require("../model/book.model");

router.post("/createRecords", async(req,res) => {
    const {title, author, release_date} = req.body;
    try{
        await bookModel.create({
            title: title,
            author: author,
            release_date: release_date,
        }).then(res => {
            console.log("Data added",res)
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        res.send("Records added");
     
    }catch(err){
        console.log("error",err);
        res.send("Internal server error");
    }
})

module.exports = router;