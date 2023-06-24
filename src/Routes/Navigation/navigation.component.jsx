import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../Assets/Crown Logo/crown.svg";
const Navigation = () => {
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
					<Link to="/signIn" className="nav-link">
						SIGN-IN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
