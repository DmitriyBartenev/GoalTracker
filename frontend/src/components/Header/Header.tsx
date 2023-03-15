import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout, reset } from '../../features/auth/authSlice';

import { StyledHeader, StyledContainer } from './styles';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};

	return (
		<StyledHeader>
			<h1>Header</h1>
			<StyledContainer>
				{user ? (
					<span onClick={onLogout}>Logout</span>
				) : (
					<>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</>
				)}
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
