import { PathFindingProvider } from './Context/PathFindingContext';
import { SpeedProvider } from './Context/SpeedContext';
import { TileProvider } from './Context/TileContext';

function App() {
	return (
		<PathFindingProvider>
			<TileProvider>
				<SpeedProvider>
					<h1 className='text-3xl font-bold underline h-screen w-screen bg-blue-500 '>
						Hello world!
					</h1>
				</SpeedProvider>
			</TileProvider>
		</PathFindingProvider>
	);
}

export default App;
