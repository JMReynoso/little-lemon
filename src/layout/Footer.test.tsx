import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
    test("renders footer image", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        const imageElement = screen.getByAltText("pic");
        expect(imageElement).toBeInTheDocument();
    });

    test("renders Doormat Nav links", () => {
        render(
            <BrowserRouter>
                <Footer />
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

    test("renders Contact links", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        const addressLink = screen.getByText("Address");
        const phoneNumberLink = screen.getByText("Phone Number");
        const emailLink = screen.getByText("Email");

        expect(addressLink).toBeInTheDocument();
        expect(phoneNumberLink).toBeInTheDocument();
        expect(emailLink).toBeInTheDocument();
    });

    test("renders Social Media links", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        const facebookLink = screen.getByText("Facebook");
        const instagramLink = screen.getByText("Instagram");
        const twitterLink = screen.getByText("Twitter");

        expect(facebookLink).toBeInTheDocument();
        expect(instagramLink).toBeInTheDocument();
        expect(twitterLink).toBeInTheDocument();
    });
});