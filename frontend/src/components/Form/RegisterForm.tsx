import React from 'react';

import { AuthInput } from '../ui/AuthInput';
import { SubmitButton } from '../ui/SubmitButton';

import { StyledForm } from './styles';

const RegisterForm: React.FC = () => {
	return (
		<StyledForm>
			<h4>Register</h4>
			<p>Register and start setting goals</p>
			<AuthInput placeholder="Enter your name" type="text" />
			<AuthInput placeholder="Enter your email" type="text" />
			<AuthInput placeholder="Enter password" type="password" />
			<AuthInput placeholder="Repeat password" type="password" />
			<SubmitButton />
		</StyledForm>
	);
};

export default RegisterForm;
