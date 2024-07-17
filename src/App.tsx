import { useRef } from 'react';
import { PathFindingProvider } from './Context/PathFindingContext';
import { SpeedProvider } from './Context/SpeedContext';
import { TileProvider } from './Context/TileContext';
import Grid from './components/Grid';
import Nav from './components/Nav';

function App() {
	const isVisualizationRunningRef = useRef(false);

	return (
		<PathFindingProvider>
			<TileProvider>
				<SpeedProvider>
					<div className='h-screen w-screen flex flex-col'>
						<Nav />
						<Grid isVisualizationRunningRef={isVisualizationRunningRef} />
					</div>
				</SpeedProvider>
			</TileProvider>
		</PathFindingProvider>
	);
}

export default App;
