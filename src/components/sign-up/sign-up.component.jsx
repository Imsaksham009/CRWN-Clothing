import { useState } from "react";
import { createUser, signUpWithEmail } from "../../utils/firebase";
import Button from "../button-component/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.style.scss";
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
		const { user } = await signUpWithEmail(email, password);
		await createUser(user, displayName);
		setFormFields({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an Account?</h2>
			<span>Sign up with your email and password</span>

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
				<Button type="submit" name="Sign-Up" />
			</form>
		</div>
	);
};

export default SignUp;
