import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from './app/hooks';

import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
	const { user } = useAppSelector((state) => state.auth);

	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
		//eslint-disable-next-line
	}, [user]);

	return (
		<>
			<Header />
			<AppRouter />
		</>
	);
};

export default App;
