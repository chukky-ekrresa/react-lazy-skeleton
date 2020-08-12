import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Parent } from 'react-lazy-skeleton';

import 'react-lazy-skeleton/build/styles.css';

const App = () => {
	return (
		<div style={{ width: '222px', height: '255px', margin: 'auto' }}>
			<Parent src="https://i.imgur.com/KY4Kl9p.jpg" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
