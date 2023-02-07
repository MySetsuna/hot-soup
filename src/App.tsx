import React, { useState } from 'react';
import './App.css';

function App () {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>HOT SOUP</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count + 1}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p>build a blog site with friend</p>
		</div>
	);
}

export default App;

// https://www.jianshu.com/p/fc192e1f7a4c 参考这篇文章
