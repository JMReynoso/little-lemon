import { render, screen } from '@testing-library/react';
import TestimonialCards from './TestimonialCards';

describe('TestimonialCards Component', () => {
    const mockProps = {
        rating: 5,
        imagePath: '/path/to/image.jpg',
        name: 'John Doe',
        review: 'This is a great service!',
    };

    test('renders the correct number of stars based on rating', () => {
        render(<TestimonialCards {...mockProps} />);
        expect(screen.getByText('⭐⭐⭐⭐⭐')).toBeInTheDocument();
    });

    test('renders the correct name', () => {
        render(<TestimonialCards {...mockProps} />);
        expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    });

    test('renders the correct review', () => {
        render(<TestimonialCards {...mockProps} />);
        expect(screen.getByText(mockProps.review)).toBeInTheDocument();
    });

    test('renders the image with the correct src and alt attributes', () => {
        render(<TestimonialCards {...mockProps} />);
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', mockProps.imagePath);
        expect(image).toHaveAttribute('alt', `${mockProps.name}'s testimonial`);
    });
});