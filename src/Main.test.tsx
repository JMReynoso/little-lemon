import Main, { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "./api/api.js";

jest.mock("react", () => {
  const originalReact = jest.requireActual("react");
  return {
    ...originalReact,
    useReducer: jest.fn(),
  };
});

jest.mock("./api/api.js", () => ({
  fetchAPI: jest.fn(),
}));

describe("Main Component", () => {
  it("should initialize times correctly", () => {
    const mockInitialTimes: string[] = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    (fetchAPI as jest.Mock).mockReturnValue(mockInitialTimes);
    const times = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(times).toEqual(mockInitialTimes);
  });

  it("should update times correctly for updating times", () => {
    const mockInitialTimes: string[] = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    (fetchAPI as jest.Mock).mockReturnValue(mockInitialTimes);
    const times = updateTimes();

    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(times).toEqual(mockInitialTimes);
  });
});
