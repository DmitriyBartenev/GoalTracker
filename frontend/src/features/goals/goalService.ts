import axios from 'axios';
import { IGoal, INewGoal } from '../../models/IGoal';

const API_URL = '/api/goals/';

// Create New Goal
const createGoal = async (goalData: INewGoal, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.post(API_URL, goalData, config);

	return response.data;
};

// Get User Goals
const getGoals = async (token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL, config);

	return response.data;
};

// Delete User Goal
const deleteGoal = async (goalId: string, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + goalId, config);

	return response.data;
};

const updateGoal = async (goalData: IGoal, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(API_URL + goalData._id, goalData, config);

	return response.data;
};

const goalService = {
	createGoal,
	getGoals,
	deleteGoal,
	updateGoal,
};

export default goalService;
