import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";

describe("AllRoutes Component", () => {
  const mockTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
  const mockDispatch = jest.fn();

  it("should render the HomePage component for the root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AllRoutes times={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(screen.getByText("This Week's Specials!")).toBeInTheDocument(); // Matches the title in HeroSection
  });

  it("should render the BookingPage component for the /reservations path", () => {
    render(
      <MemoryRouter initialEntries={["/reservations"]}>
        <AllRoutes times={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(screen.getByText("Make Your reservation")).toBeInTheDocument(); // Matches the BookingForm content
  });

  it("should render the AboutPage component for the /about path", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <AllRoutes times={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(screen.getByText("About Us")).toBeInTheDocument(); // Matches the AboutPage content
  });

  it("should render the OrderOnlinePage component for the /orderOnline path", () => {
    render(
      <MemoryRouter initialEntries={["/orderOnline"]}>
        <AllRoutes times={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(screen.getByText("Order Online Page")).toBeInTheDocument(); // Matches the OrderOnlinePage content
  });

  it("should render the LoginPage component for the /login path", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AllRoutes times={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(screen.getByText("Login Page")).toBeInTheDocument(); // Matches the LoginPage content
  });

  it("should render the AddressPage component for the /address path", () => {
    render(
      <MemoryRouter initialEntries={["/address"]}>
        <AllRoutes times={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(screen.getByText("Address Page")).toBeInTheDocument(); // Matches the AddressPage content
  });

  it("should render the PhoneNumberPage component for the /phoneNumber path", () => {
    render(
      <MemoryRouter initialEntries={["/phoneNumber"]}>
        <AllRoutes times={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(screen.getByText("Phone Number Page")).toBeInTheDocument(); // Matches the PhoneNumberPage content
  });

  it("should render the EmailPage component for the /email path", () => {
    render(
      <MemoryRouter initialEntries={["/email"]}>
        <AllRoutes times={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(screen.getByText("Email Page")).toBeInTheDocument(); // Matches the EmailPage content
  });
});
