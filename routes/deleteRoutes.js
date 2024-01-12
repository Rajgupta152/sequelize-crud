const express = require("express");
const router = express.Router();
const bookModel = require("../model/book.model");

router.get("/deleteRecords/:id", async(req,res) => {
    const {id} = req.params
    try{
        const records = await bookModel.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({ message: "Records deleted succesfully", data: records});
     
    }catch(err){
        console.log("error",err);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;

