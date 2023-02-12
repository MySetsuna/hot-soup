import type { UserLogState } from '../contexts/UseInfoProvider';

export const signInApi = ({ name, pwd }: { name: string; pwd: string }) => {
	return new Promise<UserLogState>((resolve) => {
		setTimeout(() => {
			resolve({
				isLoggedIn: true,
				isLoading: false,
				name
			});
			console.log(pwd);
		}, 300);
	});
};

export const signOutApi = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('登出成功');
		}, 300);
	});
};
