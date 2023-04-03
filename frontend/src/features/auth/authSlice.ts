import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';
import { IUser } from '../../models/IUser';

// Get User from localstorage
const userJson = localStorage.getItem('user');
const user: IUser = userJson ? JSON.parse(userJson) : null;

interface SliceState {
	user: IUser | null;
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: string | unknown;
}

const initialState: SliceState = {
	user: user,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Register User

export const registerUser = createAsyncThunk(
	'auth/register',
	async (user: IUser, thunkAPI) => {
		try {
			return await authService.register(user);
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

// Login User
export const loginUser = createAsyncThunk(
	'auth/login',
	async (user: IUser, thunkAPI) => {
		try {
			return await authService.login(user);
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

export const logoutUser = createAsyncThunk('auth/logout', async () => {
	await authService.logout();
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetAuthState: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.user = null;
			});
	},
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
