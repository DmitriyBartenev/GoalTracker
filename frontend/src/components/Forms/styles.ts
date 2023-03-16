import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const StyledForm = styled.form`
	margin: 0 auto;
	margin-top: 80px;
	max-width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	h4 {
		font-size: 24px;
		font-weight: 800;
	}
	p {
		font-size: 20px;
		margin: 16px 0 12px;
		font-weight: 800;
		color: ${colors.gray};
	}
`;
