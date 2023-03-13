const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"

// routes
var testAPIRouter = require("./routes/testAPI");
var VendorRouter = require("./routes/Vendors");
var EbickRouter = require("./routes/Ebicks");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully !");
// })
//PUT THE DATABASE URL HERE, THE ABOVE ONE IS FOR LOCALHOST


// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/vendors", VendorRouter);
app.use("/ebicks", EbickRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

