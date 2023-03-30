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
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 10px;
	h3 {
		width: 100%;
		text-align: center;
		font-size: 18px;
	}
	p {
		font-size: 16px;
		line-height: 24px;
	}
`;

export const StyledGoalItem = styled.div`
	background-color: ${colors.lightGray};
	width: 240px;
	padding: 12px 24px;
	border-radius: 5px;
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
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	input {
		height: 24px;
		text-align: center;
		width: 100%;
		color: ${colors.black};
		background-color: ${colors.lightGray};
		border: none;
		border-bottom: solid 1px ${colors.black};
		outline: none;
		::placeholder {
			opacity: 0.5;
		}
		:first-child {
			font-weight: 700;
			font-size: 18px;
		}
		:last-child {
			font-weight: 400;
			font-size: 16px;
		}
	}
`;
