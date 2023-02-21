import { signInApi, signOutApi } from '@/api/User';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
let count = 0;
const initialState: SignState = {
	name: `My Friend${count++}`,
	token: '',
	isLoading: false,
	message: '',
	isLoggedIn: false
};
export interface SignState {
	name: string;
	token: string;
	isLoading: boolean;
	message: string;
	isLoggedIn: boolean;
}

export const signInAsync = createAsyncThunk(
	'sign/signIn',
	async (amount: { user: string; pwd?: string; token?: string }) => {
		console.log(amount, 'amountamountamountamount');
		return await signInApi(amount);
	}
);

export const signOutAsync = createAsyncThunk('sign/signOut', async () => {
	return await signOutApi();
});

export const signSlice = createSlice({
	name: 'sign',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(signInAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signInAsync.fulfilled, (state, action) => {
				if (action.payload.result === 'success') {
					state.isLoggedIn = true;
					state.token = action.payload.token;
					state.name = action.payload.userName;
				}
				state.isLoading = false;
				state.message = action.payload.message;
			})
			.addCase(signOutAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signOutAsync.fulfilled, (state, action) => {
				if (action.payload.result === 'success') {
					state.isLoggedIn = false;
					state.name = '';
					state.token = '';
				}
				state.isLoading = false;
				state.message = action.payload.message;
			});
	}
});
export interface SignResult {
	result: 'success' | 'notFound' | 'error' | 'expired';
	message: string;
	userId?: string;
	userName?: string;
	token?: string;
}
const signReducer = signSlice.reducer;
export default signReducer;
