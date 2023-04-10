import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface AuthInputProps {
	errors?: string;
}

interface GoalInputProps {
	error: string | undefined;
}

export const StyledSubmitButton = styled.button`
	width: 100%;
	height: 36px;
	background-color: ${colors.black};
	border: solid 1px ${colors.black};
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 1px;
	padding: 6px 0px;
	color: ${colors.white};
	cursor: pointer;
	border-radius: 3px;
	transition: 0.3s;
	:hover {
		background-color: ${colors.white};
		color: ${colors.black};
	}
`;

export const StyledAuthInput = styled.input<AuthInputProps>`
	width: 100%;
	padding: 6px 12px;
	margin: 12px 0;
	border: solid 1px ${colors.gray};
	border-radius: 3px;
	font-size: 14px;
	font-weight: 500;
	line-height: 150%;
	::placeholder {
		color: ${colors.black};
		opacity: 0.5;
	}
	box-shadow: ${({ errors }) =>
		errors ? '0px 0px 4px 4px rgba(255, 26, 26, 0.2)' : 'none'};
`;

export const StyledGoalInput = styled.input<GoalInputProps>`
	width: 100%;
	padding: 2px 12px;
	margin: 12px 0;
	box-shadow: ${({ error }) =>
		error ? '0px 0px 4px 4px rgba(255, 26, 26, 0.2)' : 'none'};
`;

export const StyledGoalButton = styled.button`
	background-color: ${colors.white};
	width: 100%;
	height: 32px;
	border: solid 1px ${colors.black};
	padding: 4px 12px;
	border-radius: 4px;
	color: ${colors.black};
	font-size: 16px;
	transition: 0.2s;
	cursor: pointer;
	margin-top: 12px;
	:hover {
		background-color: ${colors.black};
		color: ${colors.white};
	}
`;
