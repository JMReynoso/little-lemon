import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "./HeroSection";

const mockNavigate = jest.fn();

jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useNavigate: () => mockNavigate,
}));

describe("HeroSection Component", () => {
    test("renders the title, subtitle, and description", () => {
        render(
            <MemoryRouter>
                <HeroSection />
            </MemoryRouter>
        );

        expect(screen.getByText("Little Lemon")).toBeInTheDocument();
        expect(screen.getByText("Chicago")).toBeInTheDocument();
        expect(
            screen.getByText(
                "We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
            )
        ).toBeInTheDocument();
    });

    test("renders the Reserve a Table button", () => {
        render(
            <MemoryRouter>
                <HeroSection />
            </MemoryRouter>
        );
        const button = screen.getByRole("button", { name: "Reserve a Table" });
        fireEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledWith("/reservations");
    });

    test("renders the image with correct alt text", () => {
        render(
            <MemoryRouter>
                <HeroSection />
            </MemoryRouter>
        );

        const image = screen.getByAltText("restaurant food");
        expect(image).toBeInTheDocument();
    });
});