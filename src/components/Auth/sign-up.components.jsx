import { useState } from "react";
import {
	setUserFromAuth,
	signUpUsingEmail,
} from "../../Utils/Firebase/firebase.utils";
import FormInput from "../Form-input/form-input.components";
import Button from "../Button/button.components";
import "./sign-up-form.scss";

const formfield = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	const [formfields, setFormFields] = useState(formfield);
	const { displayName, email, password, confirmPassword } = formfields;
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formfields, [name]: value });
	};

	const submitButton = async (e) => {
		e.preventDefault();
		try {
			if (password === confirmPassword) {
				const { user } = await signUpUsingEmail(email, password, displayName);
				setCurrentUser(user);
				await setUserFromAuth(user, { displayName });
			} else {
				alert("Password does not match...Try Again");
				password = "";
				confirmPassword = "";
			}
		} catch (e) {
			if (e.code === "auth/weak-password") {
				alert("Password has to be more strong");
				password = "";
				confirmPassword = "";
			}
		}
	};
	return (
		<div className="Sign-Up-Container">
			<h2>Don't have an account</h2>
			<span>Sign Up with your email and password</span>
			<form
				onSubmit={async (e) => {
					await submitButton(e);
				}}
			>
				<FormInput
					label="Name"
					type="text"
					name="displayName"
					onChange={handleInputChange}
					value={displayName}
				/>
				<FormInput
					label="E-mail"
					type="email"
					name="email"
					onChange={handleInputChange}
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					name="password"
					onChange={handleInputChange}
					value={password}
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					onChange={handleInputChange}
					value={confirmPassword}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUp;
