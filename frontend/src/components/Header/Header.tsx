import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, StyledContainer } from './styles';

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<h1>Header</h1>
			<StyledContainer>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
