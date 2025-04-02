import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
    it('renders the heading', () => {
        render(<AboutPage />);
        const headingElement = screen.getByText(/About Us/i);
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the paragraph', () => {
        render(<AboutPage />);
        const paragraphElement = screen.getByText(/Welcome to the About Page of Little Lemon!/i);
        expect(paragraphElement).toBeInTheDocument();
    });
});