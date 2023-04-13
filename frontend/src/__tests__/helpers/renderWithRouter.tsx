import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import App from '../../App';

export const renderWithRouter = (initialRoute: [string] = ['/']) => {
	return (
		<MemoryRouter initialEntries={initialRoute}>
			<Provider store={store}>
				<App />
			</Provider>
		</MemoryRouter>
	);
};
