import React from 'react';
/* eslint-disable react-hooks/rules-of-hooks */
import App, { loader as rootLoader, action as rootAction } from '@/App';
import ErrorPage from '@/ErrorPage';
import Examples from '../components/Examples';
import SignIn from '../components/SignIn';
import Welcome from '../components/Welcome';
import MemberCard from '../example/MemberCard';
import Point from '../example/Point';
import Contact, {
	loader as contactLoader,
	action as contactAction
} from '@/routes/contact';
import EditContact, { action as editAction } from '@/routes/edit';
import { action as destroyAction } from '@/routes/destroy';

const appRoutes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				index: true,
				element: <Welcome />
			},
			{
				path: 'contacts/:contactId',
				element: <Contact />,
				loader: contactLoader,
				action: contactAction
			},
			{
				path: 'contacts/:contactId/edit',
				element: <EditContact />,
				loader: contactLoader,
				action: editAction
			},
			{
				path: 'contacts/:contactId/destroy',
				loader: contactLoader,
				action: destroyAction
			},
			{
				path: 'signin',
				element: <SignIn />
			},
			{
				path: 'examples',
				element: <Examples />,
				children: [
					{
						path: 'Point',
						element: <Point />
					},
					{
						path: 'MemberCard',
						element: <MemberCard />
					}
				]
			}
		]
	}
];
export default appRoutes;
