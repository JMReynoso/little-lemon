import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
    it('renders the heading', () => {
        render(<LoginPage />);
        const heading = screen.getByRole('heading', {name: /Login Page/i});
        expect(heading).toBeInTheDocument();
    });

    it('renders the welcome message', () => {
        render(<LoginPage />);
        const welcomeMessage = screen.getByText(/Welcome to the login page!/i);
        expect(welcomeMessage).toBeInTheDocument();
    });
});