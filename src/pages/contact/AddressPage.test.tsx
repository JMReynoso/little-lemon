import { render, screen } from '@testing-library/react';
import AddressPage from './AddressPage';

describe('AddressPage', () => {
    it('renders the heading', () => {
        render(<AddressPage />);
        const heading = screen.getByText(/Address Page/i);
        expect(heading).toBeInTheDocument();
    });
});