import React from 'react';

import { StyledSubmitButton } from './styles';

interface SubmitButtonProps {
	title: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ title }) => {
	return <StyledSubmitButton>{title}</StyledSubmitButton>;
};
