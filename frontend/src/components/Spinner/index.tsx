import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
    to { transform: rotate(360deg) }
`;

const StyledSpinner = styled.div`
	margin: 0 auto;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 3px solid rgba(0, 0, 0, 0.2);
	border-top-color: rgba(0, 0, 0, 0.6);
	animation: ${SpinnerAnimation} 1s ease-in-out infinite;
`;

export const Spinner: React.FC = () => {
	return <StyledSpinner />;
};
