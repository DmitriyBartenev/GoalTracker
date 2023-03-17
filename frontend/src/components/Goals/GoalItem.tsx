import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { deleteGoal } from '../../features/goals/goalSlice';

import { IGoalItem } from '../../types';

import { StyledGoalItem } from './styles';

const GoalItem: React.FC<IGoalItem> = ({
	title,
	createdAt,
	description,
	_id,
}) => {
	const dispatch = useAppDispatch();

	return (
		<StyledGoalItem>
			<h3>{title}</h3>
			<p>{description}</p>
			<span>{new Date(createdAt).toLocaleString('en-US')}</span>
			<button onClick={() => dispatch(deleteGoal(_id))}>X</button>
		</StyledGoalItem>
	);
};

export default GoalItem;
