import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

import { getGoals } from '../../features/goals/goalSlice';

import GoalItem from './GoalItem';
import GoalCreator from './GoalCreator';

import { StyledDashboard, StyledGoalsContainer } from './styles';

const GoalsDashboard: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);
	const { goals } = useAppSelector((state) => state.goals);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
		dispatch(getGoals());
	}, [user, navigate]);

	return (
		<StyledDashboard>
			<h1>Welcome {user && user.name}</h1>
			<GoalCreator />
			<StyledGoalsContainer>
				{goals.map((item: any) => (
					<GoalItem key={item.id} {...item} />
				))}
			</StyledGoalsContainer>
		</StyledDashboard>
	);
};

export default GoalsDashboard;
