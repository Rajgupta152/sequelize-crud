const express = require("express");
const router = express.Router();
const bookModel = require("../model/book.model");

router.put("/updateRecords/:id", async(req,res) => {
    const {id} = req.params;
    const {title, author, release_date} = req.body;
    try{
        const update = await bookModel.update({
            title,
            author,
            release_date

        },{
            where: {id},
            returning: true
        }
        )

       res.status(200).send({ message: "Records updated succesfully", update});
     
    }catch(err){
        console.log("error",err);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;