import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const StyledDashboard = styled.section`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	text-align: center;
	margin-top: 60px;
`;

export const StyledGoalsContainer = styled.div`
	width: 100%;
	margin-top: 60px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	h3 {
		width: 100%;
		text-align: center;
	}
`;

export const StyledGoalItem = styled.div`
	background-color: ${colors.lightGray};
	width: 240px;
	padding: 12px 24px;
	border-radius: 5px;
	margin: 0 12px;
	position: relative;
	button {
		font-weight: 900;
		position: absolute;
		right: 10px;
		top: 10px;
		cursor: pointer;
		background-color: transparent;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
