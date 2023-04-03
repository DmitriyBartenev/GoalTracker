import React from 'react';
import { FieldValues } from 'react-hook-form';

import { StyledAuthInput } from '../styles';

interface RegisterInputProps {
	placeholder: string;
	type: string;
	register: FieldValues;
}

export const RegisterInput: React.FC<RegisterInputProps> = ({
	placeholder,
	type,
	register,
}) => {
	return (
		<StyledAuthInput type={type} placeholder={placeholder} {...register} />
	);
};
