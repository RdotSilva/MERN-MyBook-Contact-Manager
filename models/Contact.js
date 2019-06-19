const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({});

module.exports = mongoose.model("user", ContactSchema);
