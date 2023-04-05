import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/index.js";

import { UserContext } from "../../contexts/user.context";

const Nav = () => {
	const { currentUser } = useContext(UserContext);

	const signOutHandler = async () => {
		await signOutUser();
	};
	return (
		<>
			<div className="navigation">
				<Link to={"/"} className="logo-container">
					<CrwnLogo />
				</Link>
				<div className="nav-links-container">
					<Link to="shop" className="nav-link">
						Shop
					</Link>
					{currentUser ? (
						<span onClick={signOutHandler} className="nav-link">
							Sign-out
						</span>
					) : (
						<Link to="/auth" className="nav-link">
							Sign-In
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Nav;
