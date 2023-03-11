import { Outlet } from "react-router-dom";
import CategoriesList from "../category-item/category-container.components";
import "./categories-container.styles.scss";

import categories from "./categories.json";

export default function CategoriesContainer(props) {
	return (
		<div>
			<div className="categories-container">
				{categories.map((category) => {
					return <CategoriesList key={category.id} category={category} />;
				})}
			</div>
		</div>
	);
}
