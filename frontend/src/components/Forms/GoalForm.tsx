import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createGoal } from '../../features/goals/goalSlice';

import { INewGoalInputs } from '../../models/IInputs';
import { goalValidationSchema } from '../../validators/validationSchema';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { uiInputs, uiButtons } from '../ui';

import { StyledGoalForm } from './styles';

const GoalForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<INewGoalInputs>({
		resolver: yupResolver(goalValidationSchema),
	});

	const { GoalInput } = uiInputs;
	const { GoalButton } = uiButtons;

	const dispatch = useAppDispatch();

	const {
		auth: { user },
		goals: { isCreatedLoading },
	} = useAppSelector((state) => state);

	const onSubmit: SubmitHandler<INewGoalInputs> = (data: INewGoalInputs) => {
		dispatch(createGoal(data));
		reset();
	};

	return (
		<StyledGoalForm onSubmit={handleSubmit(onSubmit)}>
			<h1>Welcome {user && user.name}</h1>
			<h3>This is your Goals Dashboard</h3>
			<GoalInput
				placeholder="Your Goal Title"
				register={{ ...register('title') }}
				error={errors.title?.message}
			/>
			<GoalInput
				placeholder="Your Goal Description (optional)"
				register={{ ...register('description') }}
				error={errors.description?.message}
			/>
			<GoalButton title="Create" isCreatedLoading={isCreatedLoading} />
		</StyledGoalForm>
	);
};

export default GoalForm;
