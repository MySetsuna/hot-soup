import { configureStore } from '@reduxjs/toolkit';
import signReducer, { SignState } from './slice/signSlice';

export const store = configureStore({
	reducer: {
		sign: signReducer
	},
	devTools: import.meta.env.DEV
});

export interface RootState {
	sign: SignState;
}
