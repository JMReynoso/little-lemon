import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./BookingPage";

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("BookingPage", () => {
  const mockTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
  const mockDispatch = jest.fn();

  it("renders BookingForm when isSuccessful is false", () => {
    render(<BookingPage times={mockTimes} dispatch={mockDispatch} />);
    expect(screen.getByText(/Make Your reservation/i)).toBeInTheDocument();
  });

  it("renders BookingSuccessPage when isSuccessful is true", () => {
    const { rerender } = render(
      <BookingPage times={mockTimes} dispatch={mockDispatch} />
    );
    fireEvent.click(screen.getByText(/Make Your reservation/i)); // Simulate form submission
    rerender(<BookingPage times={mockTimes} dispatch={mockDispatch} />);
    expect(screen.queryByText(/Return Home/i)).not.toBeInTheDocument();
  });
});
