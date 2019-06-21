const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1
		});
		res.json(contacts);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
	"/",
	[
		auth,
		[
			check("name", "Name is required")
				.not()
				.isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, phone, type } = req.body;

		try {
			const newContact = new Contact({
				name,
				email,
				phone,
				type,
				user: req.user.id
			});
			const contact = await newContact.save();
			res.json(contact);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server Error");
		}
	}
);

// @route   PUT api/contacts/:id
// @desc   Update contact
// @access  Private
router.put("/:id", auth, async (req, res) => {
	const { name, email, phone, type } = req.body;

	// Build contact object
	const contactFields = {};
	if (name) contactsField.name = name;
	if (email) contactsField.email = email;
	if (phone) contactsField.phone = phone;
	if (type) contactsField.type = type;

	try {
		let contact = await Contact.findById(req.params.id);
		if (!contact) return res.status(404).json({ msg: "Contact not found" });

		// Make sure user owns contact
		if (contact.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Not authorized" });
		}
	} catch (error) {}
});

// @route   DELETE api/contacts/:id
// @desc   Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
	res.send("Delete contact");
});

module.exports = router;
