import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { IRegisterInputs } from '../../models/IInputs';
import { registerUser, resetAuthState } from '../../features/auth/authSlice';
import { registerValidationSchema } from '../../validators/validationSchema';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { uiButtons, uiInputs } from '../ui';

import { StyledAuthForm } from './styles';

const RegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IRegisterInputs>({
		resolver: yupResolver(registerValidationSchema),
	});

	const { AuthButton } = uiButtons;
	const { RegisterInput } = uiInputs;

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

		dispatch(resetAuthState());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onSubmit: SubmitHandler<IRegisterInputs> = (data: IRegisterInputs) => {
		dispatch(registerUser(data));
		reset();
	};

	return (
		<StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
			<h4>Register</h4>
			<p>Register and start setting goals</p>
			<RegisterInput
				placeholder="Enter your name"
				type="text"
				register={{ ...register('name') }}
				errors={errors.name?.message}
			/>
			<RegisterInput
				placeholder="Enter your email"
				type="text"
				register={{ ...register('email') }}
				errors={errors.email?.message}
			/>
			<RegisterInput
				placeholder="Enter password"
				type="password"
				register={{ ...register('password') }}
				errors={errors.password?.message}
			/>
			<RegisterInput
				placeholder="Repeat password"
				type="password"
				register={{ ...register('repeatPassword') }}
				errors={errors.repeatPassword?.message}
			/>
			<AuthButton title="Register" isLoading={isLoading} />
		</StyledAuthForm>
	);
};

export default RegisterForm;
