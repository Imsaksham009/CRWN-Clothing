import {
	signInUsingEmail,
	googleSignInWithPopUp,
	setUserFromAuth,
} from "../../Utils/Firebase/firebase.utils";
import { useState } from "react";

import FormInput from "../Form-input/form-input.components";
import Button from "../Button/button.components";
import "./signin.styles.scss";

const SignIn = () => {
	const [formfields, setFormFields] = useState({ email: "", password: "" });
	const { email, password } = formfields;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formfields, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await signInUsingEmail(email, password);
			alert(`Welcome back....${res.user.displayName}`);
			return res;
		} catch (e) {
			if (e.code === "auth/user-not-found") {
				alert("You are not registered. Please Sign Up to continue");
			}
			return;
		}
	};

	const signINWithGooglePopUp = async () => {
		const result = await googleSignInWithPopUp();
		const saveResult = await setUserFromAuth(result.user);
	};
	return (
		<div className="Sign-In-Container">
			<h2>I already have an account</h2>
			<span>Sign In using your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className="buttons-container">
					<Button type="submit">Sign-In</Button>
					<Button buttonType="google" onClick={signINWithGooglePopUp}>
						Google Sign IN
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
