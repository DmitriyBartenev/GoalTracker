import React from 'react';

import { Spinner } from '../../Spinner';

import { StyledGoalButton } from '../styles';

interface GoalButtonProps {
	title: string;
	isCreatedLoading: boolean;
}

export const GoalButton: React.FC<GoalButtonProps> = ({
	title,
	isCreatedLoading,
}) => {
	return (
		<StyledGoalButton disabled={isCreatedLoading}>
			{isCreatedLoading ? <Spinner /> : title}
		</StyledGoalButton>
	);
};
