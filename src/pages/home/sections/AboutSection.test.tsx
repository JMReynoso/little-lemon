import { render, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";
import { MemoryRouter } from "react-router-dom";

describe("AboutSection", () => {
  test("renders the title", () => {
    render(
      <MemoryRouter>
        <AboutSection />
      </MemoryRouter>
    );
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  });

  test("renders the subtitle", () => {
    render(
      <MemoryRouter>
        <AboutSection />
      </MemoryRouter>
    );
    expect(screen.getByText(/Chicago/i)).toBeInTheDocument();
  });

  test("renders the description paragraph", () => {
    render(
      <MemoryRouter>
        <AboutSection />
      </MemoryRouter>
    );
    const paragraphElement = screen.getByText(
      /Little Lemon is a restaurant serving Mediterranean food with a modern twist./i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders the first image with correct alt text", () => {
    render(
      <MemoryRouter>
        <AboutSection />
      </MemoryRouter>
    );
    const image1 = screen.getByAltText(/Mario and Adrian A/i);
    expect(image1).toBeInTheDocument();
  });

  test("renders the second image with correct alt text", () => {
    render(
      <MemoryRouter>
        <AboutSection />
      </MemoryRouter>
    );
    const image2 = screen.getByAltText(/Mario and Adrian B/i);
    expect(image2).toBeInTheDocument();
  });
});
