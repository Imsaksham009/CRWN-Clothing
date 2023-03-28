import { useState } from "react";
import {
	signInWithGooglePopUp,
	createUser,
	signInWithEmail,
} from "../../utils/firebase";
import Button from "../button-component/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";

const SignIn = () => {
	const [formFields, setFormFields] = useState({
		email: "",
		password: "",
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopUp();
		await createUser(user);
	};
	const { email, password } = formFields;

	const handleEmailLogin = async () => {
		const user = await signInWithEmail(email, password);
		setFormFields({ email: "", password: "" });
		console.log(user);
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an Account?</h2>
			<span>Sign in with your email and password</span>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleEmailLogin();
				}}
			>
				<FormInput
					label={{
						for: "signIn-email",
						name: "E-mail:",
					}}
					type="email"
					id="signIn-email"
					name="email"
					onChange={handleInputChange}
					value={email}
					required
				/>
				<FormInput
					label={{
						for: "signIn-password",
						name: "Password:",
					}}
					type="password"
					id="signIn-password"
					name="password"
					onChange={handleInputChange}
					value={password}
					required
				/>
				<div className="buttons-container">
					<Button type="submit" name="Sign-In" />
					<Button
						classname="google-sign-in"
						onClick={logGoogleUser}
						name="Google Sign-In"
					/>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
