import axios from 'axios';

const API_URL = '/api/goals';

interface GoalData {
	id: string;
	date: Date;
	title: string;
	description?: string;
}

// Create New Goal
const createGoal = async (goalData: GoalData, token: string) => {
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
