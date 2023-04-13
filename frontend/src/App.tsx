import React from 'react';

import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<AppRouter />
		</>
	);
};

export default App;
