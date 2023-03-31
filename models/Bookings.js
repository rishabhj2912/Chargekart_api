const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    // booking id
    booking_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    // ebick id
    ebick_id: {
        type: Schema.Types.ObjectId,
        required: true 
    },
    // user id
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    // booking start time
    booking_start_time: {
        type: Number,
        required: true
    },
    // booking end time
    booking_end_time: {
        type: Number,
        required: true
    }
});

module.exports = Booking = mongoose.model("Bookings", BookingSchema);