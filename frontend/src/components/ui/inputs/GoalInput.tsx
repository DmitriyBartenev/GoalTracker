import React from 'react';

import { StyledGoalInput } from '../styles';

interface GoalInputProps {
	placeholder: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const GoalInput: React.FC<GoalInputProps> = ({
	placeholder,
	name,
	value,
	onChange,
}) => {
	return (
		<StyledGoalInput
			type="text"
			placeholder={placeholder}
			name={name}
			value={value}
			onChange={onChange}
		/>
	);
};
