const express = require("express");
const router = express.Router();
const bookModel = require("../model/book.model");

router.get("/getRecords", async(req,res) => {
    try{
        const records = await bookModel.findAll();
        res.status(200).json({ message: "Records retrieved succesfully", data: records});
     
    }catch(err){
        console.log("error",err);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;

