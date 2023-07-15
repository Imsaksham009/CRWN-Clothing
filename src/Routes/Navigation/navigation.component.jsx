import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../Assets/Crown Logo/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../Utils/Firebase/firebase.utils";

const Navigation = () => {
	const { setCurrentUser, currentUser } = useContext(UserContext);

	const signOut = async () => {
		try {
			await SignOutUser();
			setCurrentUser(null);
			alert("Signed Out Successfullyyy....Come Back Later");
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<div className="navigation">
				<div className="logo-container">
					<Link to="/">
						<CrownLogo />
					</Link>
				</div>
				<div className="nav-links-container">
					<Link to="/shop" className="nav-link">
						SHOP
					</Link>
					<Link to="/about" className="nav-link">
						ABOUT
					</Link>
					{!currentUser ? (
						<Link to="/signIn" className="nav-link">
							SIGN-IN
						</Link>
					) : (
						<Link to="/signIn" onClick={signOut}>
							SIGN OUT
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
