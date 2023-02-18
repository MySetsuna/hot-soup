import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import appRoutes from '@/routes';

const BASE_URL = import.meta.env.BASE_URL;

const AppRouterProvider = () => {
	const router = createBrowserRouter(appRoutes, { basename: BASE_URL });
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default AppRouterProvider;
