import { render, screen } from '@testing-library/react';
import EmailPage from './EmailPage';

describe('EmailPage', () => {
    it('renders without crashing', () => {
        render(<EmailPage />);
        expect(screen.getByText(/Email Page/i)).toBeInTheDocument();
    });
});