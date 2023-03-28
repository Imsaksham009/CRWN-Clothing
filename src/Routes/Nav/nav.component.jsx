import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Nav = () => {
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
					<Link to="/auth" className="nav-link">
						Sign-In
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Nav;
