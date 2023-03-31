const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
	// vendor id
	vendor_id: {
		type: Schema.Types.ObjectId,
		required: true
	},
	vendor_name: {
		type: String,
		required: true
	},
	// list of all ebicks and their ids
	ebicks: [
		{
			ebick_id: {
				type: Schema.Types.ObjectId,
				ref: "Ebicks"
			}
		}
	]
});

module.exports = Vendor = mongoose.model("Vendors", VendorSchema);
