import formatName from "../formatName";

describe("formatName", () => {
  it("formats name correctly", () => {
    const name = {
      first: "Test",
      last: "Customer"
    };

    const expectedName = `${name.first} ${name.last}`;

    expect(formatName(name)).toEqual(expectedName);
  });
});
