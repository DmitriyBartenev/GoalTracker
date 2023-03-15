import React from 'react';

import { StyledAuthInput } from './styles';

interface AuthInputProps {
	placeholder: string;
	type: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ placeholder, type }) => {
	return <StyledAuthInput type={type} placeholder={placeholder} />;
};
