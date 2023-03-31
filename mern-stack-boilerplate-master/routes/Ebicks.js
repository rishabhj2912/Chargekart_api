var express = require("express");
var router = express.Router();

// Load Ebick model
const Ebick = require("../models/Ebicks");

// GET request
// Getting all the ebicks
// api call: http://localhost:4000/ebicks/
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
// add new ebick
// api call: http://localhost:4000/ebicks/add
router.post("/add", function(req, res) {
    var ebick = new Ebick(req.body);
    ebick.save()
        .then(ebick => {
            res.status(200).json({'ebick': 'ebick added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new ebick failed');
        });
});
// POST request
// Getting the ebick data from ebick_id
// api call: http://localhost:4000/ebicks/
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
