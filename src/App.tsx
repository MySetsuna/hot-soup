import { pink } from '@mui/material/colors';
import Paper from '@mui/material/Paper/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography/Typography';
import React, { useReducer } from 'react';
import { loginApi } from './api/User';
import './App.css';
import Copyright from './components/CopyRight';
import SignIn from './components/SignIn/SignIn';

// 第二个参数：state的reducer处理函数
type ErrorMsg = string | unknown;
type UserLogState = {
	isLoggedIn: boolean;
	isLoading: boolean;
	isLoginByCookie?: boolean;
	error?: ErrorMsg;
	name?: string;
	pwd?: string;
};
type UserLogAction = {
	type: 'logout' | 'login' | 'logCookie' | 'success' | 'error';
	payload?: { error: ErrorMsg };
	userdata?: object;
};

const initState = {
	name: '',
	pwd: '',
	isLoading: false,
	error: '',
	isLoggedIn: false
};

function loginReducer (
	state: UserLogState,
	action: UserLogAction
): UserLogState {
	switch (action.type) {
	case 'logout':
		return {
			...state,
			isLoggedIn: false,
			error: ''
		};
	case 'logCookie':
		return {
			...state,
			isLoginByCookie: true,
			isLoading: true,
			error: ''
		};
	case 'login':
		return {
			...state,
			isLoading: true,
			error: ''
		};
	case 'success':
		return {
			...state,
			isLoggedIn: true,
			isLoading: false,
			...action.userdata
		};
	case 'error':
		return {
			...state,
			error: action.payload?.error,
			name: '',
			pwd: '',
			isLoading: false
		};
	default:
		return state;
	}
}

function App () {
	const theme = createTheme();
	const [userStore, dispatch] = useReducer(loginReducer, initState);

	const login = (event: React.MouseEvent) => {
		event.preventDefault();
		dispatch({ type: 'login' });
		const [name, pwd] = ['jxk', 'jxk123'];
		loginApi({ name, pwd })
			.then((data) => {
				console.log(data, 'data');
				dispatch({ type: 'success', userdata: { name, pwd } });
			})
			.catch((error) => {
				dispatch({
					type: 'error',
					payload: { error: error.message }
				});
			});
	};

	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				{userStore.name}
				<Typography variant="h1" gutterBottom className="title" sx={{ p: 4 }}>
					Hot Soup
				</Typography>
				<Paper
					elevation={12}
					sx={{
						bgcolor: pink['50'],
						gap: 10,
						margin: 10,
						padding: 10,
						paddingTop: 5,
						marginTop: 0
					}}
				>
					<SignIn login={login} />
				</Paper>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</ThemeProvider>
		</div>
	);
}

export default App;

// https://www.jianshu.com/p/fc192e1f7a4c 参考这篇文章
