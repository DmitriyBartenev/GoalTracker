import axios from 'axios';
import { GoalItem } from '../../types';

const API_URL = '/api/goals';

// Create New Goal
const createGoal = async (goalData: GoalItem, token: string) => {
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

const goalService = {
	createGoal,
	getGoals,
	deleteGoal,
};

export default goalService;
