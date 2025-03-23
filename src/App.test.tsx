import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders all main components', () => {
        render(<App />);

        // Test that all main sections are rendered
        expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
        expect(screen.getByTestId('about-us')).toBeInTheDocument();
        expect(screen.getByTestId('class-times-prices')).toBeInTheDocument();
        expect(screen.getByTestId('programs-information')).toBeInTheDocument();
        expect(screen.getByTestId('faqs')).toBeInTheDocument();
        expect(screen.getByTestId('contact-us')).toBeInTheDocument();
        expect(screen.getByTestId('sign-in')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
    });
});

describe('App Component', () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });
}); 