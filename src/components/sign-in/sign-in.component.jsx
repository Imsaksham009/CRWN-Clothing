import { useState } from "react";
import { signInWithGooglePopUp, createUser } from "../../utils/firebase";
import Button from "../button-component/button.component";
import FormInput from "../form-input/form-input.component";

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

	return (
		<div>
			<h1>Sign-In</h1>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log(formFields);
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
				<Button type="submit" name="Sign-In" />
				<Button
					classname="google-sign-in"
					onClick={logGoogleUser}
					name="Google Sign-In"
				/>
			</form>
		</div>
	);
};

export default SignIn;
