import React from 'react';
import { FieldValues } from 'react-hook-form';

import { StyledAuthInput } from '../styles';

interface LoginInputProps {
	placeholder: string;
	type: string;
	register: FieldValues;
}

export const LoginInput: React.FC<LoginInputProps> = ({
	placeholder,
	type,
	register,
}) => {
	return (
		<StyledAuthInput type={type} placeholder={placeholder} {...register} />
	);
};
