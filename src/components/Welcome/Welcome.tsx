import React from 'react';
import useUserInfo from '../../hooks/useUserInfo';
import { NavLink } from 'react-router-dom';
const Welcome = () => {
	const { userInfo } = useUserInfo();
	return (
		<>
			<div>Welcome, {userInfo.name}</div>
			{!userInfo.isLoggedIn && <NavLink to={'signin'}>SignIn</NavLink>}
			<br />
			<NavLink to={'examples'}>Examples</NavLink>
		</>
	);
};

Welcome.propTypes = {};

export default Welcome;
