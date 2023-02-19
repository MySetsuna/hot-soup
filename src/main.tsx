import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import UserInfoProvider from '@/provider/UseInfoProvider';
import AppRouterProvider from '@/provider/AppRouterProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<UserInfoProvider>
			<AppRouterProvider />
		</UserInfoProvider>
	</React.StrictMode>
);
