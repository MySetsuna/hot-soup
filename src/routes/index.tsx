/* eslint-disable react-hooks/rules-of-hooks */
import { redirect } from 'react-router';
import Examples from '../components/Examples';
import SignIn from '../components/SignIn';
import Welcome from '../components/Welcome';
import MemberCard from '../example/MemberCard';
import Point from '../example/Point';
import useUserInfo from '../hooks/useUserInfo';
const BASE_URL = import.meta.env.BASE_URL;
const appRoutes = [
	{
		path: '/*',
		element: <Welcome />
	},
	{
		path: 'signin',
		element: <SignIn />,
		loader: (a: unknown) => {
			console.log(a, '22222222222222222');
			const { userInfo } = useUserInfo();
			console.log(a, userInfo, '333333333333333333333');
			if (userInfo.isLoggedIn) {
				redirect(BASE_URL);
			}
		}
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
];
export default appRoutes;
