import { createContext } from 'react';
import { AlgorithmType, GridType, MazeType } from './../utils/types';

interface PathFindingContextInterface {
	algorithm: AlgorithmType;
	setAlgorithm: (algorithm: AlgorithmType) => void;
	maze: MazeType;
	setMaze: (maze: MazeType) => void;
	grid: GridType;
	setGrid: (grid: GridType) => void;
	isGraphVisualized: boolean;
	setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathFindingContext = createContext<
	PathFindingContextInterface | undefined
>(undefined);

