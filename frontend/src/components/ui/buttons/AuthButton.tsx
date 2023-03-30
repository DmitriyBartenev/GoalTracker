import React from 'react';

import { Spinner } from '../../Spinner';

import { StyledSubmitButton } from '../styles';

interface SubmitButtonProps {
	title: string;
	isLoading: boolean;
}

export const AuthButton: React.FC<SubmitButtonProps> = ({
	title,
	isLoading,
}) => {
	return (
		<StyledSubmitButton>{isLoading ? <Spinner /> : title}</StyledSubmitButton>
	);
};
