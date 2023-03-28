import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Routes/Error/ErrorPage.components.jsx";
import Home from "./Routes/Home/home.component.jsx";
import Nav from "./Routes/Nav/nav.component.jsx";
import SignIn from "./Routes/Auth/user-logging.component.jsx";

const Shop = () => {
	return (
		<div>
			<h1>I am a shop</h1>
		</div>
	);
};

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Nav />}>
			<Route index element={<Home />} />
			<Route path="shop" element={<Shop />} />
			<Route path="auth" element={<SignIn />} />
			<Route path="*" element={<ErrorPage />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={routes} />;
};

export default App;
