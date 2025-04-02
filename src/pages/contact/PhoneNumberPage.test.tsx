import { render, screen } from '@testing-library/react';
import PhoneNumberPage from './PhoneNumberPage';

describe('PhoneNumberPage', () => {
    it('renders the heading', () => {
        render(<PhoneNumberPage />);
        const heading = screen.getByRole('heading', { name: /Phone Number Page/i });
        expect(heading).toBeInTheDocument();
    });

    it('renders the welcome message', () => {
        render(<PhoneNumberPage />);
        const welcomeMessage = screen.getByText(/Welcome to the Phone Number Page!/i);
        expect(welcomeMessage).toBeInTheDocument();
    });
});