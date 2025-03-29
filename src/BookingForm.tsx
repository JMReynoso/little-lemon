import React, { useState } from 'react';

interface BookingFormProps {
    onSubmit: (formData: BookingFormData) => void;
}

interface BookingFormData {
    name: string;
    email: string;
    date: string;
    time: string;
    occasion: string;
    guests: number;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<BookingFormData>({
        name: '',
        email: '',
        date: '',
        time: '',
        occasion: '',
        guests: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'guests' ? parseInt(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
            >
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                placeholder="1"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formData.occasion || ''}
                onChange={handleChange}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingForm;