import { render, screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Router Test', () => {
	test('Should render Header and Login', () => {
		renderWithRouter(['/login']);

		const headerElement = screen.getByTestId('header');
		const emailInput = screen.getByPlaceholderText('Enter your email');
		const passwordInput = screen.getByPlaceholderText('Enter password');

		expect(headerElement).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
	});
	test('Should render Header and Register', () => {
		renderWithRouter(['/register']);

		const headerElement = screen.getByTestId('header');
		const nameInput = screen.getByPlaceholderText('Enter your name');
		const emailInput = screen.getByPlaceholderText('Enter your email');
		const passwordInput = screen.getByPlaceholderText('Enter password');
		const repeatPassword = screen.getByPlaceholderText('Repeat password');

		expect(headerElement).toBeInTheDocument();
		expect(nameInput).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(repeatPassword).toBeInTheDocument();
	});
});
