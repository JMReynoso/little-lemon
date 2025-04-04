import { render, screen } from "@testing-library/react";
import Card from "./Card";

const mockNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("Card Component", () => {
  const mockProps = {
    imagePath: "/path/to/image.jpg",
    title: "Delicious Food",
    price: "$10.99",
    description: "A tasty dish you will love.",
  };

  test("renders the card with correct title", () => {
    render(<Card {...mockProps} />);
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the card with correct price", () => {
    render(<Card {...mockProps} />);
    const priceElement = screen.getByText(mockProps.price);
    expect(priceElement).toBeInTheDocument();
  });

  test("renders the card with correct description", () => {
    render(<Card {...mockProps} />);
    const descriptionElement = screen.getByText(mockProps.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders the card image with correct src and alt attributes", () => {
    render(<Card {...mockProps} />);
    const imageElement = screen.getByAltText("Picture of Food");
    expect(imageElement).toHaveAttribute("src", mockProps.imagePath);
  });

  test("renders the 'Order for Delivery' button", () => {
    render(<Card {...mockProps} />);
    const buttonElement = screen.getByText("Order for Delivery");
    expect(buttonElement).toBeInTheDocument();
  });
});
