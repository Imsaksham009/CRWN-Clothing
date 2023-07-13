import {
	googleSignInWithPopUp,
	setUserFromAuth,
} from "../../Utils/Firebase/firebase.utils";

const SignIn = () => {
	const signINWithGooglePopUp = async () => {
		const result = await googleSignInWithPopUp();
		console.log(result.user);
		const saveResult = await setUserFromAuth(result.user);
		console.log(saveResult);
	};
	return (
		<div>
			<h1>Sign IN Page</h1>
			<button onClick={signINWithGooglePopUp}>Google Sign-IN</button>
		</div>
	);
};

export default SignIn;
