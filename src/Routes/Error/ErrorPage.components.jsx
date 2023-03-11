import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div>
			<h1>Error</h1>
			<h1>Page Not Found</h1>
		</div>
	);
};

export default ErrorPage;
