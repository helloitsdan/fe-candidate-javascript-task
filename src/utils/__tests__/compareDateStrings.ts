import compareDateStrings from "../compareDateStrings";

describe("compareDateStrings", () => {
  it("returns 1 when dateA is before dateB", () => {
    expect(
      compareDateStrings("2013-12-16T09:45:52.946Z", "2020-12-16T09:45:52.946Z")
    ).toEqual(1);
  });

  it("returns -1 when dateB is before dateA", () => {
    expect(
      compareDateStrings("2020-12-16T09:45:52.946Z", "2013-12-16T09:45:52.946Z")
    ).toEqual(-1);
  });

  it("returns 0 when the two dates match", () => {
    expect(
      compareDateStrings("2020-12-16T09:45:52.946Z", "2020-12-16T09:45:52.946Z")
    ).toEqual(0);
  });
});
