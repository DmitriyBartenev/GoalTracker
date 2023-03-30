import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../features/auth/authSlice';

import { AuthButton } from '../ui/buttons/AuthButton';
import { AuthInput } from '../ui/inputs/AuthInput';

import { StyledAuthForm } from './styles';

interface InputValue {
	email: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const [formData, setFormData] = useState<InputValue>({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user, isError, isLoading, isSuccess, message } = useAppSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			console.log('Error is detected');
		}

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		const userData: InputValue = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	return (
		<StyledAuthForm onSubmit={onSubmit}>
			<h4>Login</h4>
			<p>Login and start setting goals</p>
			<AuthInput
				placeholder="Enter your email"
				type="text"
				value={email}
				name="email"
				onChange={onChange}
			/>
			<AuthInput
				placeholder="Enter password"
				type="password"
				value={password}
				name="password"
				onChange={onChange}
			/>
			<AuthButton title="Login" isLoading={isLoading} />
		</StyledAuthForm>
	);
};

export default LoginForm;
