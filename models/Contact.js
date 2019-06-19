const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	}
});

module.exports = mongoose.model("user", ContactSchema);
