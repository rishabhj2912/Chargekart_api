var express = require("express");
var router = express.Router();

// Load Booking model
const Booking = require("../models/Bookings");

// GET request
// Getting all the bookings
// api call: http://localhost:4000/bookings/
router.get("/", function(req, res) {
    Booking.find(function(err, bookings) {
        if (err) {
            console.log(err);
        } else {
            res.json(bookings);
        }
    })
}
)
// POST request
// add new booking
// api call: http://localhost:4000/bookings/add
router.post("/add", function(req, res) {
    var booking = new Booking(req.body);
    booking.save()
        .then(booking => {
            res.status(200).json({'booking': 'booking added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new booking failed');
        });
}
)

// POST request
// Getting the booking data from booking_id
// api call: http://localhost:4000/bookings/
router.post("/", function(req, res) {
    Booking.findOne({booking_id: req.body.booking_id}, function(err, booking) {
        if (err) {
            console.log(err);
        } else {
            res.json(booking);
        }
    }
)
}
)

// POST request
// Getting the booking data from user_id
// api call: http://localhost:4000/bookings/user
router.post("/user", function(req, res) {
    Booking.find({user_id: req.body.user_id}, function(err, booking) {
        if (err) {
            console.log(err);
        } else {
            res.json(booking);
        }
    }
)
}
)

// POST request
// Getting the booking data from ebick_id
// api call: http://localhost:4000/bookings/ebick
router.post("/ebick", function(req, res) {
    Booking.find({ebick_id: req.body.ebick_id}, function(err, booking) {
        if (err) {
            console.log(err);
        } else {
            res.json(booking);
        }
    }
)
}
)

module.exports = router;
