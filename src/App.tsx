import { pink } from '@mui/material/colors';
import Paper from '@mui/material/Paper/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography/Typography';
import React, { useEffect } from 'react';
import './App.css';
import Copyright from './components/CopyRight';
import SignIn from './components/SignIn/SignIn';

function App () {
	const theme = createTheme();

	useEffect(() => {
		let logStore = false;
		if (!logStore) {
			console.log(logStore);
		}

		return () => {
			logStore = true;
		};
	}, []);

	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				<Typography variant="h1" gutterBottom>
					Hot Soup
				</Typography>
				<Paper
					elevation={12}
					sx={{
						bgcolor: pink['50'],
						gap: 10,
						margin: 10,
						padding: 10,
						paddingTop: 5
					}}
				>
					<SignIn />
				</Paper>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</ThemeProvider>
		</div>
	);
}

export default App;

// https://www.jianshu.com/p/fc192e1f7a4c 参考这篇文章
