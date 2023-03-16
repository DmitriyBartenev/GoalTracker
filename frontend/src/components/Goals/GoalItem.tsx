import React from 'react';
import { StyledGoalItem } from './styles';

interface GoalItemProps {
	text: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ text }) => {
	return (
		<StyledGoalItem>
			<h3>{text}</h3>
			<span>Date</span>
			<p>Description</p>
		</StyledGoalItem>
	);
};

export default GoalItem;
