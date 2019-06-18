const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  public
router.post(
	"/",
	[
		check("name", "Nme is required")
			.not()
			.isEmpty()
	],
	(req, res) => {
		res.send(req.body);
	}
);

module.exports = router;
