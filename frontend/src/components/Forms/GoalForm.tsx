import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createGoal } from '../../features/goals/goalSlice';

import { GoalInput } from '../ui/GoalInput';
import { GoalButton } from '../ui/GoalButton';

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

	const { title, description } = formData;

	const dispatch = useAppDispatch();

	const {
		auth: { user },
		goals: { onCreateLoading },
	} = useAppSelector((state) => state);

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
			<h1>Welcome {user && user.name}</h1>
			<h3>This is your Goals Dashboard</h3>
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
			<GoalButton title="Create" onCreateLoading={onCreateLoading} />
		</StyledGoalForm>
	);
};

export default GoalForm;
