import React, { useState } from "react";

const ContactForm = () => {
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		type: "personal"
	});

	return <div />;
};

export default ContactForm;
