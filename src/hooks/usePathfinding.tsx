import { useContext } from 'react';
import { PathFindingContext } from '../Context/PathFindingContext';

export const usePathfinding = () => {
	const context = useContext(PathFindingContext);

	if (!context) {
		throw new Error('usePathfind must be used within a PathfindProvider');
	}

	return context;
};
