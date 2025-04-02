import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav Component", () => {
    it("renders the logo and navigates to home on click", () => {
        render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        );

        const logo = screen.getByAltText("Logo");
        expect(logo).toBeInTheDocument();
    });

    it("renders all navigation links", () => {
        render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        );

        const homeLink = screen.getByText("Home");
        const aboutLink = screen.getByText("About");
        const reservationsLink = screen.getByText("Reservations");
        const orderOnlineLink = screen.getByText("Order Online");
        const loginLink = screen.getByText("Login");

        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(reservationsLink).toBeInTheDocument();
        expect(orderOnlineLink).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
    });

    it("links have correct href attributes", () => {
        render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        );

        expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
        expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
        expect(screen.getByRole("link", { name: "Reservations" })).toHaveAttribute("href", "/reservations");
        expect(screen.getByRole("link", { name: "Order Online" })).toHaveAttribute("href", "/orderOnline");
        expect(screen.getByRole("link", { name: "Login" })).toHaveAttribute("href", "/login");
    });
});