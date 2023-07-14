import SignIn from "../../components/Auth/sign-in.components";
import SignUp from "../../components/Auth/sign-up.components";
import "./auth.styles.scss";
const Auth = () => {
	return (
		<div className="authentication-container">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Auth;
