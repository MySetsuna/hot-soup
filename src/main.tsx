import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import UserInfoProvider from './contexts/UseInfoProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserInfoProvider>
				<Routes>
					<Route
						// loader={(params) => {
						// 	console.log(params);
						// 	redirect('/hot-soup/');
						// }}
						path={'/hot-soup/*'}
						element={<App />}
					/>
				</Routes>
			</UserInfoProvider>
		</BrowserRouter>
	</React.StrictMode>
);
