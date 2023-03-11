import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Routes/Error/ErrorPage.components.jsx";
import Home from "./Routes/Home/home.component.jsx";

const Shop = () => {
	return (
		<div>
			<h1>This is the Shop Page</h1>
		</div>
	);
};

const routes = createBrowserRouter([
	{
		path: "/home",
		element: <Home />,
		children: [
			{
				path: "shop",
				element: <Shop />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={routes} />;
};

export default App;
