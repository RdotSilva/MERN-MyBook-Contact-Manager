import React from "react";

const ContactItem = ({ contact }) => {
	const { id, name, email, phone, type } = contact;
	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{name}{" "}
				<span
					classname={
						"badge " +
						(type === "professional" ? "badge-success" : "badge-primary")
					}
				>
					{type}
				</span>
			</h3>
		</div>
	);
};

export default ContactItem;
