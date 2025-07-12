import { capitalizeStr } from "../js/functions";
import { reverseStr, Calculator } from "../js/functions";

describe("Test Different Functions", () => {
  it("Capitalize the string", () => {
    expect(capitalizeStr("abcd")).toBe("Abcd");
  });
  it("Reverse the string", () => {
    expect(reverseStr("abcd")).toBe("dcba");
  });
  it("Calculator", () => {
    let calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
  });
});
