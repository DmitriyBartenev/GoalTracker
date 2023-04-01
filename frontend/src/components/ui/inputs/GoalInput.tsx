import React from 'react';
import { FieldValues } from 'react-hook-form/dist/types';

import { StyledGoalInput } from '../styles';

interface GoalInputProps {
	placeholder: string;
	register: FieldValues;
}

export const GoalInput: React.FC<GoalInputProps> = ({
	placeholder,
	register,
}) => {
	return (
		<StyledGoalInput type="text" placeholder={placeholder} {...register} />
	);
};
