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
		cursor: pointer;
		background-color: transparent;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		svg {
			stroke: ${colors.black};
		}
	}
`;

export const StyledDeleteButton = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;
`;

export const StyledEditButton = styled.button`
	position: absolute;
	left: 10px;
	top: 10px;
`;

export const StyledEditForm = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const StyledEditSubmitButton = styled.button`
	border-bottom: 1px solid ${colors.black};
`;
