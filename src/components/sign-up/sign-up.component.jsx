import { useState } from "react";
import { createUser, signInWithEmail } from "../../utils/firebase";
import FormInput from "../form-input/form-input.component";

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
		setFormFields({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div>
			<h1>Sign-Up</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label={{ for: "displayName", name: "Display Name:" }}
					type="text"
					id="displayName"
					name="displayName"
					onChange={handleInputChange}
					value={displayName}
					required
				/>
				<FormInput
					label={{
						for: "email",
						name: "E-mail:",
					}}
					type="email"
					id="email"
					name="email"
					onChange={handleInputChange}
					value={email}
					required
				/>
				<FormInput
					label={{
						for: "password",
						name: "Password:",
					}}
					type="password"
					id="password"
					name="password"
					onChange={handleInputChange}
					value={password}
					required
				/>
				<FormInput
					label={{
						for: "confirmPassword",
						name: "Confirm Password:",
					}}
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
