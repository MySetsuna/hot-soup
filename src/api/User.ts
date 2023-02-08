export const loginApi = ({ name, pwd }: { name: string; pwd: string }) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`${name}登录成功`);
			console.log(pwd);
		}, 300);
	});
};
