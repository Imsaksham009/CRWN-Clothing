import { useState } from "react";
import { createUser, signInWithEmail } from "../../utils/firebase";

const SignUp = () => {
	const [formFields, setFormFields] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const { email, displayName, password, confirmPassword } = formFields;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		const { user } = await signInWithEmail(email, password, displayName);
		user.displayName = displayName;
		await createUser(user);
	};

	return (
		<div>
			<h1>Sign-Up</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="displayName">Full Name:</label>
				<input
					type="text"
					id="displayName"
					name="displayName"
					onChange={handleInputChange}
					value={displayName}
					required
				/>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={handleInputChange}
					value={email}
					required
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={handleInputChange}
					value={password}
					required
				/>
				<label htmlFor="confirmPassword">Confirm Password:</label>
				<input
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					onChange={handleInputChange}
					value={confirmPassword}
					required
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUp;
