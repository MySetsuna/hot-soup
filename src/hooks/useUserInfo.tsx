import { useContext } from 'react';
import { UserInfoContext } from '../contexts/UseInfoProvider';

const useUserInfo = () => {
	const context = useContext(UserInfoContext);
	if (context === undefined) {
		throw Error(
			'Must be used inside of a UserInfoProvider, ' +
				'otherwise it will not function correctly.'
		);
	}
	return context;
};
export default useUserInfo;
