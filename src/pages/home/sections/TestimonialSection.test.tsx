import { render, screen } from "@testing-library/react";
import TestimonialSection from "./TestimonialSection";
import { MemoryRouter } from "react-router-dom";

describe("TestimonialSection Component", () => {
  test("renders the section title", () => {
    render(
      <MemoryRouter>
        <TestimonialSection />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/Testimonials/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders all testimonial cards with correct names", () => {
    render(
      <MemoryRouter>
        <TestimonialSection />
      </MemoryRouter>
    );

    const names = ["Jane Doe", "Some Person", "John Doe"];
    names.forEach((name) => {
      const nameElement = screen.getByText(name);
      expect(nameElement).toBeInTheDocument();
    });
  });

  test("renders all testimonial cards with correct reviews", () => {
    render(
      <MemoryRouter>
        <TestimonialSection />
      </MemoryRouter>
    );

    const reviews = [
      "Delicious and fresh.",
      "Fresh and delicious.",
      "Very good.",
    ];
    reviews.forEach((review) => {
      const reviewElement = screen.getByText(review);
      expect(reviewElement).toBeInTheDocument();
    });
  });

  test("renders all testimonial cards with correct star ratings", () => {
    render(
      <MemoryRouter>
        <TestimonialSection />
      </MemoryRouter>
    );

    const ratings = ["⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐"];
    ratings.forEach((rating) => {
      const ratingElement = screen.getByText(rating);
      expect(ratingElement).toBeInTheDocument();
    });
  });

  test("renders all testimonial cards with correct images", () => {
    render(
      <MemoryRouter>
        <TestimonialSection />
      </MemoryRouter>
    );

    const images = [
      { alt: "Jane Doe's testimonial" },
      { alt: "Some Person's testimonial" },
      { alt: "John Doe's testimonial" },
    ];

    images.forEach(({ alt }) => {
      const imageElement = screen.getByAltText(alt);
      expect(imageElement).toBeInTheDocument();
    });
  });
});