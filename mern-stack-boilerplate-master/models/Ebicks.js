const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EbickSchema = new Schema({
    // ebick id
    ebick_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    ebick_latitute: {
        type: Number,
        required: true
    },
    ebick_longitude: {
        type: Number,
        required: true
    },
    ebick_altitude: {
        type: Number,
        required: true
    },
    ebick_time: {
        type: Number,
        required: true
    },
    ebick_compass: {
        type: Number,
        required: true
    },
   //ebick soc is a list of battery voltage and current
    ebick_soc: [
        {
            ebick_voltage: {
                type: Number,
                required: true
            },
            ebick_current: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = Ebick = mongoose.model("Ebicks", EbickSchema);
