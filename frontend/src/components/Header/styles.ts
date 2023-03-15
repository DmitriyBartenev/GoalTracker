import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledHeader = styled.header`
	width: 100%;
	padding: 15px 0;
	border-bottom: solid 1px ${colors.black};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledContainer = styled.div`
	span {
		font-size: 16px;
		font-weight: 500;
		margin-right: 10px;
	}
	a {
		border-bottom: solid 1px transparent;
		transition: border 0.4s;
	}
	a:last-child {
		margin-left: 10px;
	}
	.active {
		border-color: ${colors.black};
	}
`;

export const StyledLogout = styled.button`
	padding: 3px 12px;
	background-color: ${colors.black};
	color: ${colors.white};
	border: solid 1px ${colors.black};
	font-size: 16px;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.3s;
	:hover {
		color: ${colors.black};
		background-color: ${colors.white};
	}
`;
