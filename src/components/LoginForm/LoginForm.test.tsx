import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

describe('LoginForm Component', () => {
    test('renders form elements', () => {
        render(<LoginForm />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    test('shows error message when submitting empty form', () => {
        render(<LoginForm />);
        const submitButton = screen.getByRole('button', { name: /login/i });
        fireEvent.click(submitButton);
        expect(screen.getByRole('alert')).toHaveTextContent('Please fill in all fields');
    });

    test('handles form input changes', async () => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        await userEvent.type(emailInput, 'test@example.com');
        await userEvent.type(passwordInput, 'password123');

        expect(emailInput).toHaveValue('test@example.com');
        expect(passwordInput).toHaveValue('password123');
    });
}); 