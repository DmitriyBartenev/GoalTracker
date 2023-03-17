import axios from 'axios';
import { IGoalItem, INewGoalItem } from '../../models/IGoal';

const API_URL = '/api/goals/';

// Create New Goal
const createGoal = async (goalData: INewGoalItem, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.post<INewGoalItem>(API_URL, goalData, config);

	return response.data;
};

// Get User Goals
const getGoals = async (token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get<IGoalItem[]>(API_URL, config);

	return response.data;
};

// Delete User Goal
const deleteGoal = async (goalId: string, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete<IGoalItem>(API_URL + goalId, config);

	return response.data;
};

const goalService = {
	createGoal,
	getGoals,
	deleteGoal,
};

export default goalService;
