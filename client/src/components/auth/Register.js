import React, { useState } from "react";

const Register = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: ""
	});

	const { name, email, password, password2 } = user;

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form>
				<div className="form-group">
					<label htmlFor="name">Name</label>
          <input type='text' name='name' value={name} onChange={} />
				</div>
        <div className="form-group">
					<label htmlFor="email">Email</label>
          <input type='email' name='email' value={email} onChange={} />
				</div>
			</form>
		</div>
	);
};

export default Register;
