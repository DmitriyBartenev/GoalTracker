import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

import { getGoals, reset } from '../../features/goals/goalSlice';

import GoalItem from './GoalItem';
import GoalCreator from './GoalCreator';
import { Spinner } from '../Spinner';

import { StyledDashboard, StyledGoalsContainer } from './styles';

const GoalsDashboard: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);
	const { goals, isError, isLoading, message } = useAppSelector(
		(state) => state.goals
	);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
		if (isError) {
			console.log(message);
		}

		dispatch(getGoals());

		return () => {
			dispatch(reset());
		};
	}, [user, navigate, dispatch, isError, message]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<StyledDashboard>
			<h1>Welcome {user && user.name}</h1>
			<h3>This is your Goals Dashboard</h3>
			<GoalCreator />
			<StyledGoalsContainer>
				{goals.length > 0 ? (
					goals.map((item) => <GoalItem key={item._id} {...item} />)
				) : (
					<h3>Start to set your goals </h3>
				)}
			</StyledGoalsContainer>
		</StyledDashboard>
	);
};

export default GoalsDashboard;
