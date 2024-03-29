import Category from "./category.components";
import "./categories.styles.scss";

const shopData = [
	{
		id: 1,
		title: "Hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
	},
	{
		id: 2,
		title: "Jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
	},
	{
		id: 3,
		title: "Sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
	},
	{
		id: 4,
		title: "Womens",
		imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
	},
	{
		id: 5,
		title: "Mens",
		imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
	},
];

const Categories = () => {
	return (
		<div className="categories-container">
			{shopData.map(({ title, id, imageUrl }) => {
				return <Category key={id} title={title} src={imageUrl} />;
			})}
		</div>
	);
};

export default Categories;
