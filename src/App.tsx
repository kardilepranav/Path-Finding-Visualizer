import { PathFindingProvider } from './Context/PathFindingContext';
import { SpeedProvider } from './Context/SpeedContext';
import { TileProvider } from './Context/TileContext';
import Grid from './components/Grid';

function App() {
	return (
		<PathFindingProvider>
			<TileProvider>
				<SpeedProvider>
					<div className='h-screen w-screen flex flex-col'>
						<Grid />
					</div>
				</SpeedProvider>
			</TileProvider>
		</PathFindingProvider>
	);
}

export default App;
