export default function CategoriesContainer({ category }) {
	return (
		<div className="category-container">
			<div className="background-image" />
			<div className="category-body-container">
				<h1>{category.title}</h1>
				<p>Shop Now</p>
			</div>
		</div>
	);
}
