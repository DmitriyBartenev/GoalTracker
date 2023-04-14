import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { store } from '../../redux/store';
import App from '../../App';

export const renderWithRouter = (initialRoute: [string] = ['/']) => {
	return render(
		<MemoryRouter initialEntries={initialRoute}>
			<Provider store={store}>
				<App />
			</Provider>
		</MemoryRouter>
	);
};
