import React from 'react';
import GoalInput from '../ui/GoalInput';
import { SubmitButton } from '../ui/SubmitButton';
import { StyledForm } from './styles';

const GoalForm: React.FC = () => {
	return (
		<StyledForm>
			<GoalInput />
			<SubmitButton />
		</StyledForm>
	);
};

export default GoalForm;
