var express = require("express");
var router = express.Router();

// GET request 
// Just a test API to check if server is working properly or not
// api call: http://localhost:4000/testAPI/
router.get("/", function(req, res) {
	res.send("API is working properly !");
});

module.exports = router;
