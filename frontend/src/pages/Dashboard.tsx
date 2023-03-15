import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const Dashboard: React.FC = () => {
	const navigate = useNavigate();

	const { user } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user, navigate]);

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
};

export default Dashboard;
