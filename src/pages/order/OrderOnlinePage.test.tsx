import { render, screen } from '@testing-library/react';
import OrderOnlinePage from './OrderOnlinePage';

describe('OrderOnlinePage', () => {
    it('renders the heading', () => {
        render(<OrderOnlinePage />);
        const headingElement = screen.getByText(/Order Online Page/i);
        expect(headingElement).toBeInTheDocument();
    });
});