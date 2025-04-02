import { render, screen } from "@testing-library/react";
import HighlightSection from "./HighlightSection";
import { MemoryRouter } from "react-router-dom";

describe("HighlightSection Component", () => {
  test("renders the section title", () => {
    render(
      <MemoryRouter>
        <HighlightSection />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/This Week's Specials!/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the Online Menu button", () => {
    render(
      <MemoryRouter>
        <HighlightSection />
      </MemoryRouter>
    );
    const buttonElement = screen.getByText(/Online Menu/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders all cards with correct titles", () => {
    render(
      <MemoryRouter>
        <HighlightSection />
      </MemoryRouter>
    );

    const cardTitles = ["Greek Salad", "Burchetta", "Lemon Dessert"];
    cardTitles.forEach((title) => {
      const cardTitleElement = screen.getByText(title);
      expect(cardTitleElement).toBeInTheDocument();
    });
  });

  test("renders all cards with correct prices", () => {
    render(
      <MemoryRouter>
        <HighlightSection />
      </MemoryRouter>
    );

    const cardPrices = ["$12.99", "$5.99", "$8.99"];
    cardPrices.forEach((price) => {
      const cardPriceElement = screen.getByText(price);
      expect(cardPriceElement).toBeInTheDocument();
    });
  });

  test("renders all cards with correct descriptions", () => {
    render(
      <MemoryRouter>
        <HighlightSection />
      </MemoryRouter>
    );

    const cardDescriptions = [
      "Delicious and fresh.",
      "Tasty and healthy.",
      "Sweet and tangy.",
    ];
    cardDescriptions.forEach((description) => {
      const cardDescriptionElement = screen.getByText(description);
      expect(cardDescriptionElement).toBeInTheDocument();
    });
  });
});
