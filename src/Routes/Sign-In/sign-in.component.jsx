import { Fragment } from "react";
import { signInWithGooglePopUp } from "../../utils/firebase/index";

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopUp();
	};

	return (
		<Fragment>
			<h1>Sign-In Page</h1>
			<button onClick={logGoogleUser}> Click to sign in </button>
		</Fragment>
	);
};

export default SignIn;
