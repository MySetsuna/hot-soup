import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import UserInfoProvider from './contexts/UseInfoProvider';
const BASE_URL = import.meta.env.BASE_URL;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter basename={BASE_URL}>
			<UserInfoProvider>
				<App />
			</UserInfoProvider>
		</BrowserRouter>
	</React.StrictMode>
);
