import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
const Examples = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to={'Point'}>Point</Link>
					</li>
					<li>
						<Link to={'MemberCard'}>MemberCard</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Examples;
