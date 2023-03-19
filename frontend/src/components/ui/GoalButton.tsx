import React from 'react';

import { Spinner } from '../Spinner';

import { StyledGoalButton } from './styles';

interface GoalButtonProps {
	title: string;
	onCreateLoading: boolean;
}

export const GoalButton: React.FC<GoalButtonProps> = ({
	title,
	onCreateLoading,
}) => {
	return (
		<StyledGoalButton disabled={onCreateLoading}>
			{onCreateLoading ? <Spinner /> : title}
		</StyledGoalButton>
	);
};
