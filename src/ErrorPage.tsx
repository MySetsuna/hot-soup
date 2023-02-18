import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	let message: string;
	if (isRouteErrorResponse(error)) {
		console.log(error.status, error.data);
		message = error.statusText;
	} else if (error instanceof Error) {
		message = error.message;
	}
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{message}</i>
			</p>
		</div>
	);
}
