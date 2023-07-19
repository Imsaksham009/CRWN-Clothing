import React, { useContext } from "react";
import Button from "../Button/button.components";

import "./card-dropdown.scss";

const CartDropDown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items" />
			<Button buttonType="inverter">CheckOut</Button>
		</div>
	);
};

export default CartDropDown;
