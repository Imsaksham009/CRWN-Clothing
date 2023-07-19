import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../Assets/Crown Logo/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../Utils/Firebase/firebase.utils";
import { CartDropDownContext } from "../../context/cart-dropdown";
import Cart from "../../components/cart/cart";
import CartDropDown from "../../components/cart/cart-dropdown";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	const { isOpen, setOpen } = useContext(CartDropDownContext);

	const signOut = async () => {
		try {
			await SignOutUser();
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

					<Cart />
				</div>
				{isOpen && <CartDropDown />}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
