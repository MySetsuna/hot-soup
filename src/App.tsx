import { pink } from '@mui/material/colors';
import Paper from '@mui/material/Paper/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography/Typography';
import {
	Form,
	NavLink,
	Outlet,
	redirect,
	useLoaderData,
	useNavigation,
	useSubmit
} from 'react-router-dom';
import './App.css';
import Copyright from './components/CopyRight';
import { getContacts, createContact } from '@/contacts';
import React from 'react';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
async function loader({ request }) {
	const url = new URL(request.url);
	const q = url.searchParams.get('q');
	const contacts = await getContacts(q);
	return { contacts, q };
}
async function action() {
	const contact = await createContact();

	console.log(contact, 'contact');
	return redirect(`/contacts/${contact.id}/edit`);
}
function App() {
	const theme = createTheme();
	const userInfo = useSelector((state: RootState) => state.sign);
	console.log(userInfo, 'userInfouserInfouserInfouserInfo');
	const navigation = useNavigation();
	const { contacts, q } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
	const submit = useSubmit();
	const searchRef = React.useRef<HTMLInputElement>();
	const searching =
		navigation.location &&
		new URLSearchParams(navigation.location.search).has('q');
	React.useEffect(() => {
		searchRef.current.value = q;
	}, [q]);
	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				<Avatar alt={userInfo.isLoggedIn ? `${userInfo.name}` : 'E'} src="sd" />
				<Typography variant="h3" gutterBottom className="title" sx={{ p: 4 }}>
					Hot Soup
				</Typography>
				<Paper
					sx={{
						display: 'flex',
						margin: 0,
						padding: 0
					}}
					elevation={0}
				>
					<Paper
						id="sidebar"
						elevation={12}
						sx={{
							bgcolor: pink['50'],
							margin: '3rem',
							padding: '2rem',
							marginTop: 0
						}}
					>
						<h3>Welcome, {userInfo.name}</h3>
						<Form id="search-form" role="search">
							<input
								ref={searchRef}
								id="q"
								className={searching ? 'loading' : ''}
								aria-label="Search contacts"
								placeholder="Search"
								type="search"
								name="q"
								defaultValue={q}
								onChange={(event) => {
									const isFirstSearch = q == null;
									submit(event.currentTarget.form, {
										replace: !isFirstSearch
									});
								}}
							/>
							<div id="search-spinner" aria-hidden hidden={!searching} />
							<div className="sr-only" aria-live="polite"></div>
						</Form>
						<nav>
							<ul>
								{!userInfo.isLoggedIn && (
									<li>
										<NavLink
											to={'signin'}
											className={({ isActive, isPending }) =>
												isActive ? 'active' : isPending ? 'pending' : ''
											}
										>
											SignIn
										</NavLink>
									</li>
								)}
								<li>
									<NavLink
										to={'examples'}
										className={({ isActive, isPending }) =>
											isActive ? 'active' : isPending ? 'pending' : ''
										}
									>
										Examples
									</NavLink>
								</li>
							</ul>
							<div>
								{/* other code */}
								<Form method="post">
									<button type="submit">New</button>
								</Form>
							</div>
							{contacts.length ? (
								<ul>
									{contacts.map((contact) => (
										<li key={contact.id}>
											<NavLink
												to={`contacts/${contact.id}`}
												className={({ isActive, isPending }) =>
													isActive ? 'active' : isPending ? 'pending' : ''
												}
											>
												{contact.first || contact.last ? (
													<>
														{contact.first} {contact.last}
													</>
												) : (
													<i>No Name</i>
												)}
												{contact.favorite && <span>★</span>}
											</NavLink>

											{/* other code */}
										</li>
									))}
								</ul>
							) : (
								<p>
									<i>No contacts</i>
								</p>
							)}
						</nav>
					</Paper>
					<Paper
						id={'detail'}
						sx={{
							bgcolor: pink['50'],
							margin: '3rem',
							padding: '5rem',
							paddingTop: '5rem',
							marginTop: 0
						}}
						elevation={12}
						className={
							navigation.state === 'loading' || userInfo.isLoading
								? 'loading'
								: ''
						}
					>
						<Outlet />
					</Paper>
				</Paper>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</ThemeProvider>
		</div>
	);
}

export { App as default, loader, action };

// https://www.jianshu.com/p/fc192e1f7a4c 参考这篇文章
