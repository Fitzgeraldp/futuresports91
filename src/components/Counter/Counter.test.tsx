import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
    test('renders counter with initial value', () => {
        render(<Counter />);
        expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
    });

    test('increments counter when + button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByLabelText('Increment');
        fireEvent.click(incrementButton);
        expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
    });

    test('decrements counter when - button is clicked', () => {
        render(<Counter />);
        const decrementButton = screen.getByLabelText('Decrement');
        fireEvent.click(decrementButton);
        expect(screen.getByText(/counter: -1/i)).toBeInTheDocument();
    });
}); 