import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout, reset } from '../../features/auth/authSlice';

import { StyledHeader, StyledContainer, StyledLogout } from './styles';

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
