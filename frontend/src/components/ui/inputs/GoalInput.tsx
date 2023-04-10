import React from 'react';
import { FieldValues } from 'react-hook-form/dist/types';

import { StyledGoalInput } from '../styles';

interface GoalInputProps {
	placeholder: string;
	register: FieldValues;
	error: string | undefined;
}

export const GoalInput: React.FC<GoalInputProps> = ({
	placeholder,
	register,
	error,
}) => {
	return (
		<StyledGoalInput
			type="text"
			placeholder={error ? error : placeholder}
			{...register}
			error={error}
		/>
	);
};
