var express = require("express");
var router = express.Router();

// Load Vendor model
const Vendor = require("../models/Vendors");

// GET request 
// Getting all the vendors
// api call: http://localhost:4000/vendors/
router.get("/", function(req, res) {
    Vendor.find(function(err, vendors) {
		if (err) {
			console.log(err);
		} else {
			res.json(vendors);
		}
	})
});

// POST request
// add new vendor
// api call: http://localhost:4000/vendors/add
router.post("/add", function(req, res) {
    var vendor = new Vendor(req.body);
    vendor.save()
        .then(vendor => {
            res.status(200).json({'vendor': 'vendor added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new vendor failed');
        });
});
// POST request
//Getting list of all ebicks from vendor_id
//api call: http://localhost:4000/vendors/ebicks
router.post("/ebicks", function(req, res) {
    Vendor.findOne({vendor_id: req.body.vendor_id}, function(err, vendor) {
        if (err) {
            console.log(err);
        } else {
            res.json(vendor.ebicks);
        }
    })
});

// POST request
// Getting the vendor name and id from ebick_id
//api call: http://localhost:4000/vendors/vendor
router.post("/vendor", function(req, res) {
    Vendor.findOne({"ebicks.ebick_id": req.body.ebick_id}, function(err, vendor) {
        if (err) {
            console.log(err);
        } else {
            res.json(vendor);
        }
    })
});




module.exports = router;

