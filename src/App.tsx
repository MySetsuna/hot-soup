import React, { useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';

function App () {
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
		<div className="App">
			<SignIn />
		</div>
	);
}

export default App;

// https://www.jianshu.com/p/fc192e1f7a4c 参考这篇文章
