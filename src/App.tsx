import { pink } from '@mui/material/colors';
import Paper from '@mui/material/Paper/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography/Typography';
import './App.css';
import Copyright from './components/CopyRight';
import useAppRoutes from './hooks/useAppRoutes';
import useUserInfo from './hooks/useUserInfo';

function App() {
	const theme = createTheme();
	const { app } = useAppRoutes();
	const { userInfo } = useUserInfo();

	console.log(app, 'app');
	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				{userInfo.isLoggedIn && `${userInfo.name}`}
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
					{app}
				</Paper>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</ThemeProvider>
		</div>
	);
}

export default App;

// https://www.jianshu.com/p/fc192e1f7a4c 参考这篇文章
