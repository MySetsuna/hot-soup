import { get } from 'lodash';
import { useRoutes } from 'react-router';
import appRoutes from '../routes';

const useAppRoutes = () => {
	const app = useRoutes(appRoutes);
	const getChildrenPath = (parent: string) => {
		return get(appRoutes, parent);
	};
	return { app, getChildrenPath } as const;
};

export default useAppRoutes;
