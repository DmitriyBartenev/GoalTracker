import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { ILoginInputs } from '../../models/IInputs';
import { loginUser, resetAuthState } from '../../features/auth/authSlice';
import { loginValidationSchema } from '../../validators/validationSchema';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { uiButtons, uiInputs } from '../ui';

import { StyledAuthForm } from './styles';

const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ILoginInputs>({
		resolver: yupResolver(loginValidationSchema),
	});

	const { AuthButton } = uiButtons;
	const { LoginInput } = uiInputs;

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

		dispatch(resetAuthState());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onSubmit: SubmitHandler<ILoginInputs> = (data: ILoginInputs) => {
		dispatch(loginUser(data));
		reset();
	};

	return (
		<StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
			<h4>Login</h4>
			<p>Login and start setting goals</p>
			<LoginInput
				placeholder="Enter your email"
				type="text"
				register={{ ...register('email') }}
			/>
			<LoginInput
				placeholder="Enter password"
				type="password"
				register={{ ...register('password') }}
			/>
			<AuthButton title="Login" isLoading={isLoading} />
		</StyledAuthForm>
	);
};

export default LoginForm;
