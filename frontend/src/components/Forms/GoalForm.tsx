import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createGoal } from '../../features/goals/goalSlice';

import { GoalInput } from '../ui/GoalInput';
import { SubmitButton } from '../ui/SubmitButton';

import { StyledGoalForm } from './styles';

interface CreateGoalInputs {
	title: string;
	description: string;
}

const GoalForm: React.FC = () => {
	const [formData, setFormData] = useState<CreateGoalInputs>({
		title: '',
		description: '',
	});

	const dispatch = useAppDispatch();

	const { title, description } = formData;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(createGoal(formData));

		setFormData({
			title: '',
			description: '',
		});
	};

	return (
		<StyledGoalForm onSubmit={onSubmit}>
			<GoalInput
				placeholder="Your Goal Title"
				name="title"
				value={title}
				onChange={onChange}
			/>
			<GoalInput
				placeholder="Your Goal Description (optional)"
				name="description"
				value={description}
				onChange={onChange}
			/>
			<SubmitButton title="Create" />
		</StyledGoalForm>
	);
};

export default GoalForm;
