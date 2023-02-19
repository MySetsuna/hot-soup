import React from 'react';
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import appRoutes from '@/routes';
import { Router } from '@remix-run/router';

const BASE_URL = import.meta.env.BASE_URL;

const AppRouterProvider = () => {
	let router: Router;
	// 如果部署到gh-pages需要使用HashRouter
	if (import.meta.env.MODE !== 'gh') {
		router = createBrowserRouter(appRoutes, { basename: BASE_URL });
	} else {
		router = createHashRouter(appRoutes);
	}
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default AppRouterProvider;
