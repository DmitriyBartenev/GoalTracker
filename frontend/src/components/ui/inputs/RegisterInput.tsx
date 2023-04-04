import React from 'react';
import { FieldValues } from 'react-hook-form';

import { StyledAuthInput } from '../styles';

interface RegisterInputProps {
	placeholder: string;
	type: string;
	register: FieldValues;
	errors?: string;
}

export const RegisterInput: React.FC<RegisterInputProps> = ({
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
