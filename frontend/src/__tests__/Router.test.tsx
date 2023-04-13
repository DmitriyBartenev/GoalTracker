import { render, screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Router Test', () => {
	test('Should render Header and Login', () => {
		render(renderWithRouter(['/login']));

		const headerElement = screen.getByTestId('header');
		const emailInput = screen.getByPlaceholderText('Enter your email');
		const passwordInput = screen.getByPlaceholderText('Enter password');

		expect(headerElement).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
	});
});
