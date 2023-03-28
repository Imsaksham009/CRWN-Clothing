import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./user-logging.style.scss";

const UserLogging = () => {
	return (
		<div className="authentication-container">
			<SignIn />
			<br />
			<SignUp />
		</div>
	);
};

export default UserLogging;
