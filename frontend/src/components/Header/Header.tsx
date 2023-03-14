import React from 'react';

import { StyledHeader, StyledContainer } from './styles';

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<h1>Header</h1>
			<StyledContainer>
				<span>Login</span>
				<span>Register</span>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
