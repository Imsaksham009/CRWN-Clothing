import React from "react";
import Button from "../Button/button.components";

import "./productCard.scss";

const ProductCard = ({ name, imageUrl, price }) => {
	// const { name, imageUrl, price } = product;
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType="inverter">Add to Card</Button>
		</div>
	);
};

export default ProductCard;
