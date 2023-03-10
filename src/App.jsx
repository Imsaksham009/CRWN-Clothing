import CategoriesContainer from "./components/categories-container.components";
import "./categories.styles.scss";

function App() {
	const categories = [
		{
			id: 1,
			title: "Hats",
		},
		{
			id: 2,
			title: "Jackets",
		},
		{
			id: 3,
			title: "Sneakers",
		},
		{
			id: 4,
			title: "Womens",
		},
		{
			id: 5,
			title: "Mens",
		},
	];

	return (
		<div>
			<h1>CRWN Clothing</h1>
			<div className="categories-container">
				{categories.map((category) => {
					return <CategoriesContainer category={category} key={category.id} />;
				})}
			</div>
		</div>
	);
}

export default App;
