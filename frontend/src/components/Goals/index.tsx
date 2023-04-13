import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getGoals, reset } from '../../features/goals/goalSlice';

import GoalItem from './GoalItem';
import GoalCreator from './GoalCreator';
import { Spinner } from '../Spinner';

import { StyledDashboard, StyledGoalsContainer } from './styles';

const GoalsDashboard: React.FC = () => {
	const { user } = useAppSelector((state) => state.auth);
	const { goals, isError, isLoading, message } = useAppSelector(
		(state) => state.goals
	);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}

		if (isError) {
			console.log('Oops...error' + message);
		}

		dispatch(getGoals());

		return () => {
			dispatch(reset());
		};
	}, [user, navigate, dispatch, isError, message]);

	return (
		<StyledDashboard>
			<GoalCreator />
			<StyledGoalsContainer>
				{isLoading ? (
					<Spinner />
				) : goals?.length > 0 ? (
					goals.map((item) => <GoalItem key={item._id} {...item} />)
				) : (
					<h3>Start to set your goals </h3>
				)}
			</StyledGoalsContainer>
		</StyledDashboard>
	);
};

export default GoalsDashboard;
