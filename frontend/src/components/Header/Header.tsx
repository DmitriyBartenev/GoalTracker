import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser, resetAuthState } from '../../features/auth/authSlice';

import { StyledHeader, StyledContainer, StyledLogout } from './styles';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logoutUser());
		dispatch(resetAuthState());
		navigate('/');
	};

	return (
		<StyledHeader data-testid="header">
			<h1>GoalTracker</h1>
			<StyledContainer>
				{user ? (
					<StyledLogout onClick={onLogout}>Logout</StyledLogout>
				) : (
					<>
						<NavLink
							to="/login"
							className={(props) => (props.isActive ? 'active' : '')}
						>
							Login
						</NavLink>
						<NavLink to="/register">Register</NavLink>
					</>
				)}
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
