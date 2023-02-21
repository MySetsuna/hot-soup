import { SignResult } from '@/app/slice/signSlice';

export const signInApi = ({
	user,
	pwd,
	token
}: {
	user: string;
	pwd?: string;
	token?: string;
}) => {
	return new Promise<SignResult>((resolve) => {
		setTimeout(() => {
			resolve({
				result: 'success',
				message: '',
				token: 'fasdfasdfasd-43214234-@#$^@#@%',
				userName: user
			});
			console.log(pwd, user, token);
		}, 1000);
	});
};

export const signOutApi = () => {
	return new Promise<SignResult>((resolve) => {
		setTimeout(() => {
			resolve({
				result: 'success',
				message: '登出成功'
			});
		}, 300);
	});
};
