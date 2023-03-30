import React from 'react';

import { StyledAuthInput } from '../styles';

interface AuthInputProps {
	placeholder: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthInput: React.FC<AuthInputProps> = ({
	placeholder,
	type,
	name,
	value,
	onChange,
}) => {
	return (
		<StyledAuthInput
			type={type}
			placeholder={placeholder}
			name={name}
			value={value}
			onChange={onChange}
		/>
	);
};
