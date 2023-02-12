import { createContext, useReducer } from 'react';
import { signInApi, signOutApi } from '../api/User';

interface useUserInfoProps {
	children: JSX.Element;
}
const INIT_STATE = {
	name: '',
	pwd: '',
	isLoading: false,
	error: '',
	isLoggedIn: false
};
const UserInfoProvider = (props: useUserInfoProps) => {
	const [userInfo, dispatch] = useReducer(signInReducer, INIT_STATE);
	const signOut = () => {
		signOutApi()
			.then((data) => {
				console.log(data, 'data');
				dispatch({ type: 'signOut' });
			})
			.catch((error) => {
				dispatch({
					type: 'error',
					payload: { error: error.message }
				});
			});
	};
	const signIn = ({ name, pwd }: { name: string; pwd: string }) => {
		return new Promise<UserLogState>((resolved, reject) => {
			dispatch({ type: 'signIn' });
			signInApi({ name, pwd })
				.then((data) => {
					console.log(data, 'data');
					dispatch({ type: 'success', userdata: { name, pwd } });
					resolved(data);
				})
				.catch((error) => {
					dispatch({
						type: 'error',
						payload: { error: error.message }
					});
					reject(error);
				});
		});
	};
	return (
		<UserInfoContext.Provider value={{ userInfo, signIn, signOut }}>
			{props.children}
		</UserInfoContext.Provider>
	);
};
export default UserInfoProvider;
export { UserInfoContext };

interface UserInfoContextValues {
	userInfo: UserLogState;
	signIn(_arg0: { name: string; pwd: string }): Promise<UserLogState>;
	signOut(): void;
}
const UserInfoContext = createContext<UserInfoContextValues | undefined>(
	undefined
);

function signInReducer(
	state: UserLogState,
	action: UserLogAction
): UserLogState {
	switch (action.type) {
	case 'signOut':
		return {
			...state,
			isLoggedIn: false,
			error: ''
		};
	case 'logCookie':
		return {
			...state,
			isLoginByCookie: true,
			isLoading: true,
			error: ''
		};
	case 'signIn':
		return {
			...state,
			isLoading: true,
			error: ''
		};
	case 'success':
		return {
			...state,
			isLoggedIn: true,
			isLoading: false,
			...action.userdata
		};
	case 'error':
		return {
			...state,
			error: action.payload?.error,
			name: '',
			pwd: '',
			isLoading: false
		};
	default:
		return state;
	}
}
type ErrorMsg = string | unknown;
export interface UserLogState {
	isLoggedIn: boolean;
	isLoading: boolean;
	isLoginByCookie?: boolean;
	error?: ErrorMsg;
	name: string;
	pwd?: string;
}
interface UserLogAction {
	type: 'signOut' | 'signIn' | 'logCookie' | 'success' | 'error';
	payload?: { error: ErrorMsg };
	userdata?: object;
}
