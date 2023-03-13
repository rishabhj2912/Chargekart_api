var express = require("express");
var router = express.Router();

// Load Vendor model
const Vendor = require("../models/Vendors");

// GET request 
// Getting all the vendors
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
//Getting list of all ebicks from vendor_id
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

