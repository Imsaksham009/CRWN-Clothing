import { Fragment } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const UserLogging = () => {
	return (
		<Fragment>
			<SignIn />
			<br />
			<SignUp />
		</Fragment>
	);
};

export default UserLogging;
