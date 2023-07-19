import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import ProductCard from "../../components/product-card/product-card";

import "./ShopPage.scss";
const ShopPage = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className="product-container">
			{products.map(({ id, name, price, imageUrl }) => {
				return (
					<ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
				);
			})}
		</div>
	);
};

export default ShopPage;
