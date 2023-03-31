import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteGoal, updateGoal } from '../../features/goals/goalSlice';

import { IGoal } from '../../models/IGoal';
import { IEditInput } from '../../models/IInputs';

import {
	StyledGoalItem,
	StyledDeleteButton,
	StyledEditButton,
	StyledEditForm,
} from './styles';

import { icons } from '../ui/icons';
import { Spinner } from '../Spinner';

const GoalItem: React.FC<IGoal> = (goal) => {
	const { title, createdAt, description, _id } = goal;

	const [edit, setEdit] = useState<boolean>(false);
	const [formValue, setFormValue] = useState<IEditInput>({
		title: title,
		description: description,
	});

	const { CheckIcon, CloseIcon, EditIcon } = icons;
	const dispatch = useAppDispatch();

	const { isUpdatedLoading } = useAppSelector((state) => {
		const goalToUpdate = state.goals.goals.find(
			(goal: IGoal) => goal._id === _id
		);
		return { isUpdatedLoading: goalToUpdate?.isLoading };
	});

	const onEditGoal = () => {
		const editGoal = {
			...goal,
			title: formValue.title,
			description: formValue.description,
		};

		if (editGoal.title === title && editGoal.description === description) {
			setEdit(false);
		} else if (editGoal.title) {
			dispatch(updateGoal(editGoal));
			setEdit(false);
		}
	};

	const onDeleteGoal = () => {
		dispatch(deleteGoal(goal));
		setEdit(false);
	};

	return (
		<StyledGoalItem>
			{edit ? (
				<StyledEditForm>
					<input
						type="text"
						value={formValue.title}
						placeholder="Goal Title"
						onChange={(e) =>
							setFormValue({ ...formValue, title: e.target.value })
						}
					/>
					<input
						type="text"
						value={formValue.description}
						placeholder="Goal Description"
						onChange={(e) =>
							setFormValue({ ...formValue, description: e.target.value })
						}
					/>
				</StyledEditForm>
			) : isUpdatedLoading ? (
				<Spinner />
			) : (
				<>
					<h3>{title}</h3>
					<p>{description}</p>
				</>
			)}
			<span>{new Date(createdAt).toLocaleString('en-US')}</span>
			<StyledEditButton onClick={() => setEdit(!edit)}>
				<EditIcon />
			</StyledEditButton>
			<StyledDeleteButton onClick={edit ? onEditGoal : onDeleteGoal}>
				{edit ? <CheckIcon /> : <CloseIcon />}
			</StyledDeleteButton>
		</StyledGoalItem>
	);
};

export default GoalItem;
