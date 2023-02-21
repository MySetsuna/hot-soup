import { describe, expect, it } from 'vitest';
import signSliceReducer from './signSlice';

describe('counter reducer', () => {
	const initialState = {
		name: 'My Friend0',
		token: '',
		isLoading: false,
		message: '',
		isLoggedIn: false
	};
	it('should handle initial state', () => {
		expect(signSliceReducer(undefined, { type: 'unknown' })).toEqual(
			initialState
		);
	});
});
