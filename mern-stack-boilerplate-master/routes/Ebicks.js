var express = require("express");
var router = express.Router();

// Load Ebick model
const Ebick = require("../models/Ebicks");

// GET request
// Getting all the ebicks
router.get("/", function(req, res) {
    Ebick.find(function(err, ebicks) {
        if (err) {
            console.log(err);
        } else {
            res.json(ebicks);
        }
    })
});

// POST request
// Getting the ebick data from ebick_id
router.post("/", function(req, res) {
    Ebick.findOne({ebick_id: req.body.ebick_id}, function(err, ebick) {
        if (err) {
            console.log(err);
        } else {
            res.json(ebick);
        }
    })
});

module.exports = router;
