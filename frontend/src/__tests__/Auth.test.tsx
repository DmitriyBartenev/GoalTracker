import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';
import { act } from '@testing-library/react';

describe('Authentication Tests', () => {
	test('Should login user after submit login form', async () => {
		render(renderWithRouter(['/login']));

		const emailInput = screen.getByPlaceholderText('Enter your email');
		const passwordInput = screen.getByPlaceholderText('Enter password');
		const submitButton = screen.getByTestId('submit');

		await act(async () => {
			fireEvent.change(emailInput, {
				target: { value: 'bartenevdmitriy@bk.ru' },
			});
		});
		await act(async () => {
			fireEvent.change(passwordInput, { target: { value: '123123' } });
		});
		await act(async () => {
			fireEvent.click(submitButton);
			``;
		});

		await waitFor(() => expect(window.location.pathname).toEqual('/'));
	});
	test('Should register user after submit register form', async () => {
		render(renderWithRouter(['/register']));

		const nameInput = screen.getByPlaceholderText('Enter your name');
		const emailInput = screen.getByPlaceholderText('Enter your email');
		const passwordInput = screen.getByPlaceholderText('Enter password');
		const repeatPassword = screen.getByPlaceholderText('Repeat password');
		const submitButton = screen.getByTestId('submit');

		await act(async () => {
			fireEvent.change(nameInput, {
				target: { value: 'Name' },
			});
		});
		await act(async () => {
			fireEvent.change(emailInput, {
				target: { value: 'bartenevdmitriy@bk.ru' },
			});
		});
		await act(async () => {
			fireEvent.change(passwordInput, {
				target: { value: '123123' },
			});
		});
		await act(async () => {
			fireEvent.change(repeatPassword, {
				target: { value: '123123' },
			});
		});
		await act(async () => {
			fireEvent.click(submitButton);
		});

		await waitFor(() => expect(window.location.pathname).toEqual('/'));
	});
});
