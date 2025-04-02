import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
    const mockOnSubmit = jest.fn();
    const mockDispatch = jest.fn();
    const mockSetIsSuccessful = jest.fn();
    const mockTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];

    const setup = () => {
        render(
            <BookingForm
                onSubmit={mockOnSubmit}
                dispatch={mockDispatch}
                times={mockTimes}
                setIsSuccessful={mockSetIsSuccessful}
            />
        );
    };

    test("renders all form fields correctly", () => {
        setup();
        expect(screen.getByLabelText(/Choose date:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose time:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of guests:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion:/i)).toBeInTheDocument();
        expect(screen.getByText(/Make Your reservation/i)).toBeInTheDocument();
    });

    test("calls dispatch when date is selected", () => {
        setup();
        const dateInput = screen.getByLabelText(/Choose date:/i);
        fireEvent.change(dateInput, { target: { value: "2023-10-10" } });
        expect(mockDispatch).toHaveBeenCalledWith("1"); // Assuming 2023-10-10 is a Tuesday
    });

    test("validates form and shows alert if date is missing", () => {
        setup();
        const submitButton = screen.getByText(/Make Your reservation/i);
        window.alert = jest.fn();
        fireEvent.click(submitButton);
        expect(window.alert).toHaveBeenCalledWith("Date is required.");
    });

    test("validates form and shows alert if occasion is missing", () => {
        setup();
        const dateInput = screen.getByLabelText(/Choose date:/i);
        fireEvent.change(dateInput, { target: { value: "2023-10-10" } });

        const submitButton = screen.getByText(/Make Your reservation/i);
        window.alert = jest.fn();
        fireEvent.click(submitButton);
        expect(window.alert).toHaveBeenCalledWith("Occasion is required.");
    });

    test("validates form and shows alert if guests are out of range", () => {
        setup();
        const dateInput = screen.getByLabelText(/Choose date:/i);
        fireEvent.change(dateInput, { target: { value: "2023-10-10" } });

        const occasionSelect = screen.getByLabelText(/Occasion:/i);
        fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

        const guestsInput = screen.getByLabelText(/Number of guests:/i);
        fireEvent.change(guestsInput, { target: { value: "11" } });

        const submitButton = screen.getByText(/Make Your reservation/i);
        window.alert = jest.fn();
        fireEvent.click(submitButton);
        expect(window.alert).toHaveBeenCalledWith("Guests must be between 1 and 10.");
    });

    test("submits form with valid data", () => {
        setup();
        const dateInput = screen.getByLabelText(/Choose date:/i);
        fireEvent.change(dateInput, { target: { value: "2023-10-10" } });

        const occasionSelect = screen.getByLabelText(/Occasion:/i);
        fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

        const guestsInput = screen.getByLabelText(/Number of guests:/i);
        fireEvent.change(guestsInput, { target: { value: "5" } });

        const timeSelect = screen.getByLabelText(/Choose time:/i);
        fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });

        const submitButton = screen.getByText(/Make Your reservation/i);
        fireEvent.click(submitButton);

        expect(mockOnSubmit).toHaveBeenCalledWith({
            date: "2023-10-10",
            times: mockTimes,
            occasion: "Birthday",
            guests: 5,
        });
        expect(mockSetIsSuccessful).toHaveBeenCalledWith(true);
    });
});