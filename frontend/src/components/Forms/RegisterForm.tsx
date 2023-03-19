import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../../features/auth/authSlice';

import { AuthInput } from '../ui/AuthInput';
import { AuthButton } from '../ui/AuthButton';
import { Spinner } from '../Spinner';

import { StyledAuthForm } from './styles';

interface Input {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
}

const RegisterForm: React.FC = () => {
	const [formData, setFormData] = useState<Input>({
		name: '',
		email: '',
		password: '',
		repeatPassword: '',
	});

	const { name, email, password, repeatPassword } = formData;

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { isError, isLoading, isSuccess, message, user } = useAppSelector(
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

		if (password !== repeatPassword) {
			throw new Error('Passwords mismatch');
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<StyledAuthForm onSubmit={onSubmit}>
			<h4>Register</h4>
			<p>Register and start setting goals</p>
			<AuthInput
				placeholder="Enter your name"
				type="text"
				name="name"
				value={name}
				onChange={onChange}
			/>
			<AuthInput
				placeholder="Enter your email"
				type="text"
				name="email"
				value={email}
				onChange={onChange}
			/>
			<AuthInput
				placeholder="Enter password"
				type="password"
				name="password"
				value={password}
				onChange={onChange}
			/>
			<AuthInput
				placeholder="Repeat password"
				type="password"
				name="repeatPassword"
				value={repeatPassword}
				onChange={onChange}
			/>
			<AuthButton title="Register" />
		</StyledAuthForm>
	);
};

export default RegisterForm;
