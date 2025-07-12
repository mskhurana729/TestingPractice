import { capitalizeStr } from "../js/functions";
import { reverseStr } from "../js/functions";
describe("Test Different Functions", () => {
  it("Capitalize the string", () => {
    expect(capitalizeStr("abcd")).toBe("Abcd");
  });
  it("Reverse the string", () => {
    expect(reverseStr("abcd")).toBe("dcba");
  });
});
