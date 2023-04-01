import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import goalService from '../../services/goalService';
import { IGoal, INewGoal } from '../../models/IGoal';

interface GoalSlice {
	goals: IGoal[];
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	isCreatedLoading: boolean;
	message: string | unknown;
}

const initialState: GoalSlice = {
	goals: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	isCreatedLoading: false,
	message: '',
};

// Create new goal
export const createGoal = createAsyncThunk(
	'goals/create',
	async (goalData: INewGoal, thunkAPI: any) => {
		try {
			if (thunkAPI.getState().auth.user) {
				const token = thunkAPI.getState().auth.user.token;
				return await goalService.createGoal(goalData, token);
			}
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
			if (thunkAPI.getState().auth.user) {
				const token = thunkAPI.getState().auth.user.token;
				return await goalService.getGoals(token);
			}
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
	async (goalData: IGoal, thunkAPI: any) => {
		try {
			if (thunkAPI.getState().auth.user) {
				const token = thunkAPI.getState().auth.user.token;
				return await goalService.deleteGoal(goalData, token);
			}
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

export const updateGoal = createAsyncThunk(
	'goals/update',
	async (goalData: IGoal, thunkAPI: any) => {
		try {
			if (thunkAPI.getState().auth.user) {
				const token = thunkAPI.getState().auth.user.token;
				return await goalService.updateGoal(goalData, token);
			}
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
				state.isCreatedLoading = true;
			})
			.addCase(createGoal.fulfilled, (state, action: PayloadAction<IGoal>) => {
				state.isSuccess = true;
				state.isCreatedLoading = false;
				state.goals.push(action.payload);
			})
			.addCase(createGoal.rejected, (state, action) => {
				state.isCreatedLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getGoals.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGoals.fulfilled, (state, action: PayloadAction<IGoal[]>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals = action.payload;
			})
			.addCase(getGoals.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteGoal.pending, (state, action) => {
				const goalToDelete = state.goals.find(
					(goal: IGoal) => goal._id === action.meta.arg._id
				);
				if (goalToDelete) {
					goalToDelete.isLoading = true;
				}
			})
			.addCase(deleteGoal.fulfilled, (state, action) => {
				const goalToDelete = action.payload;
				if (goalToDelete) {
					state.goals = state.goals.filter(
						(goal: IGoal) => goal._id !== action.payload.id
					);
					goalToDelete.isLoading = false;
				}
			})
			.addCase(deleteGoal.rejected, (state, action) => {
				const goalToDelete = state.goals.find(
					(goal: IGoal) => goal._id === action.meta.arg._id
				);
				if (goalToDelete) {
					goalToDelete.isLoading = false;
					state.isError = true;
					state.message = action.payload;
				}
			})
			.addCase(updateGoal.pending, (state, action) => {
				const goalToUpdate = state.goals.find(
					(goal: IGoal) => goal._id === action.meta.arg._id
				);
				if (goalToUpdate) {
					goalToUpdate.isLoading = true;
				}
			})
			.addCase(updateGoal.fulfilled, (state, action: PayloadAction<IGoal>) => {
				const updatedGoal = action.payload;
				const goalToUpdateIndex = state.goals.findIndex(
					(goal: IGoal) => goal._id === updatedGoal._id
				);
				if (goalToUpdateIndex !== -1) {
					state.goals[goalToUpdateIndex] = updatedGoal;
					state.goals[goalToUpdateIndex].isLoading = false;
					state.isSuccess = true;
				}
			})
			.addCase(updateGoal.rejected, (state, action) => {
				const goalToUpdateIndex = state.goals.findIndex(
					(goal: IGoal) => goal._id === action.meta.arg._id
				);
				if (goalToUpdateIndex !== -1) {
					state.goals[goalToUpdateIndex].isLoading = false;
					state.isError = true;
					state.message = action.payload;
				}
			});
	},
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
