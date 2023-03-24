import { Fragment, useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import { createUser, signInWithGooglePopUp } from "../../utils/firebase/index";

const SignIn = () => {
	useEffect(() => {}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopUp();
		await createUser(user);
	};

	return (
		<Fragment>
			<h1>Sign-In Page</h1>
			<button onClick={logGoogleUser}> Google Sign-In </button>
			<br />
			<SignUp />
		</Fragment>
	);
};

export default SignIn;
