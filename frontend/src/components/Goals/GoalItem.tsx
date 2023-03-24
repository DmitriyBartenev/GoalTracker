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
	StyledEditSubmitButton,
} from './styles';

import { CloseIcon } from '../ui/icons/CloseIcon';
import { EditIcon } from '../ui/icons/EditIcon';
import { Spinner } from '../Spinner';

const GoalItem: React.FC<IGoal> = (goal) => {
	const { title, createdAt, description, _id } = goal;

	const [edit, setEdit] = useState<boolean>(false);
	const [formValue, setFormValue] = useState<IEditInput>({
		title: title,
		description: description,
	});

	const dispatch = useAppDispatch();
	const { isUpdatedLoading } = useAppSelector((state) => state.goals);

	const onEditGoal = () => {
		const editGoal = {
			...goal,
			title: formValue.title,
			description: formValue.description,
		};
		setEdit(false);

		if (editGoal.title) {
			dispatch(updateGoal(editGoal));
		}
	};

	return (
		<StyledGoalItem>
			{edit ? (
				<StyledEditForm>
					<input
						type="text"
						value={formValue.title}
						onChange={(e) =>
							setFormValue({ ...formValue, title: e.target.value })
						}
					/>
					<input
						type="text"
						value={formValue.description}
						onChange={(e) =>
							setFormValue({ ...formValue, description: e.target.value })
						}
					/>
					<StyledEditSubmitButton onClick={onEditGoal} type="submit">
						Save
					</StyledEditSubmitButton>
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
			<StyledDeleteButton onClick={() => dispatch(deleteGoal(_id))}>
				<CloseIcon />
			</StyledDeleteButton>
		</StyledGoalItem>
	);
};

export default GoalItem;
