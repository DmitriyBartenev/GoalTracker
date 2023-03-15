import React from 'react';
import { SubmitButton } from '../ui/Buttons/SubmitButton';
import { AuthInput } from '../ui/Inputs/AuthInput';

import { StyledForm } from './styles';

const LoginForm: React.FC = () => {
	return (
		<StyledForm>
			<h4>Login</h4>
			<p>Login and start setting goals</p>
			<AuthInput placeholder="Enter your email" type="text" />
			<AuthInput placeholder="Enter password" type="password" />
			<SubmitButton />
		</StyledForm>
	);
};

export default LoginForm;
