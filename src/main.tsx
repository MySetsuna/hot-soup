import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import UserInfoProvider from './contexts/UseInfoProvider';
const BASE_URL = import.meta.env.BASE_URL;
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HashRouter>
			<UserInfoProvider>
				<Routes>
					<Route
						// loader={(params) => {
						// 	console.log(params);
						// 	redirect(BASE_URL);
						// }}
						path={`${BASE_URL}*`}
						element={<App />}
					/>
				</Routes>
			</UserInfoProvider>
		</HashRouter>
	</React.StrictMode>
);
