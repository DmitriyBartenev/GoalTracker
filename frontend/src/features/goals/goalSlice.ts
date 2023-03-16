import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalService from './goalService';
import { GoalItem } from '../../types';

interface GoalSlice {
	goals: GoalItem[];
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: string | unknown;
}

const initialState: GoalSlice = {
	goals: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Create new goal
export const createGoal = createAsyncThunk(
	'goals/create',
	async (goalData: GoalItem, thunkAPI: any) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await goalService.createGoal(goalData, token);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

//Get User Goals
export const getGoals = createAsyncThunk(
	'goals/getAll',
	async (_, thunkAPI: any) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await goalService.getGoals(token);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Delete User Goal
export const deleteGoal = createAsyncThunk(
	'goals/delete',
	async (id: string, thunkAPI: any) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await goalService.deleteGoal(id, token);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const goalSlice = createSlice({
	name: 'goals',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createGoal.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createGoal.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals.push(action.payload);
			})
			.addCase(createGoal.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.message = action.payload;
			})
			.addCase(getGoals.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGoals.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals = action.payload;
			})
			.addCase(getGoals.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteGoal.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteGoal.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals = state.goals.filter(
					(goal: GoalItem) => goal._id !== action.payload.id
				);
			})
			.addCase(deleteGoal.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
