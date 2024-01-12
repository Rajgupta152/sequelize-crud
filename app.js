const express = require("express");
require("dotenv").config();
require("./helpers/mysql/connect");
require("./model/book.model");
const createRoutes = require("./routes/createRoutes");
const getRecords = require("./routes/getRoutes");
const deleteRecords = require("./routes/deleteRoutes");
const updateRecords = require("./routes/updateRoutes");

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello");
});

app.use("/api",createRoutes);
app.use("/api",getRecords);
app.use("/api",deleteRecords);
app.use("/api",updateRecords);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})

