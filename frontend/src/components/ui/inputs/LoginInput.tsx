import React from 'react';
import { FieldValues } from 'react-hook-form';

import { StyledAuthInput } from '../styles';

interface LoginInputProps {
	placeholder: string;
	type: string;
	register: FieldValues;
	errors?: string;
}

export const LoginInput: React.FC<LoginInputProps> = ({
	placeholder,
	type,
	register,
	errors,
}) => {
	return (
		<StyledAuthInput
			type={type}
			placeholder={placeholder}
			{...register}
			errors={errors}
		/>
	);
};
