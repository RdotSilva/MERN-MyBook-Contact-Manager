import React, { useState } from "react";

const ContactForm = () => {
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		type: "personal"
	});

	const { name, email, phone, type } = contact;

	return (
		<form>
			<h2 className="text-primary">Add Contact</h2>
			<input
				type="text"
				placeholder="Name"
				name="name"
				value={name}
				onChange={onChange}
			/>
			<input
				type="email"
				placeholder="Email"
				name="email"
				value={email}
				onChange={onChange}
			/>
		</form>
	);
};

export default ContactForm;
