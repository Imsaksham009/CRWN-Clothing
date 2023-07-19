import { ReactComponent as CartIcon } from "../../Assets/cart.svg";
import { useContext } from "react";
import { CartDropDownContext } from "../../context/cart-dropdown";
import "./card.scss";
const Cart = () => {
	const { isOpen, setOpen } = useContext(CartDropDownContext);
	const toggle = () => {
		isOpen ? setOpen(false) : setOpen(true);
	};
	return (
		<div className="cart-icon-container" onClick={toggle}>
			<CartIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default Cart;
