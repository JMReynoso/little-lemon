import { initializeTimes, updateTimes } from "./Main";

jest.mock("react", () => {
  const originalReact = jest.requireActual("react");
  return {
    ...originalReact,
    useReducer: jest.fn(),
  };
});

describe("Main Component", () => {
  it("should initialize times correctly", () => {
    const times = initializeTimes();
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  it("should update times correctly for Sunday (day 0)", () => {
    const times = updateTimes([], "0");
    expect(times).toEqual(["17:00", "18:00", "19:00"]);
  });

  it("should update times correctly for Monday (day 1)", () => {
    const times = updateTimes([], "1");
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  it("should update times correctly for Tuesday (day 2)", () => {
    const times = updateTimes([], "2");
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });

  it("should update times correctly for Wednesday (day 3)", () => {
    const times = updateTimes([], "3");
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]);
  });

  it("should update times correctly for Thursday (day 4)", () => {
    const times = updateTimes([], "4");
    expect(times).toEqual(["17:00", "18:00"]);
  });

  it("should update times correctly for Friday (day 5)", () => {
    const times = updateTimes([], "5");
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });

  it("should update times correctly for Saturday (day 6)", () => {
    const times = updateTimes([], "6");
    expect(times).toEqual(["17:00", "18:00", "19:00"]);
  });

  it("should return default times for invalid day input", () => {
    const times = updateTimes([], "invalid");
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});
