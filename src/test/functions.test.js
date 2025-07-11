import capitalizeStr from "../js/functions";
describe("Test Different Functions", () => {
  it("Capitalize the string", () => {
    expect(capitalizeStr("abcd")).toBe("Abcd");
  });
});
