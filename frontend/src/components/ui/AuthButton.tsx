import React from 'react';

import { StyledSubmitButton } from './styles';

interface SubmitButtonProps {
	title: string;
}

export const AuthButton: React.FC<SubmitButtonProps> = ({ title }) => {
	return <StyledSubmitButton>{title}</StyledSubmitButton>;
};
