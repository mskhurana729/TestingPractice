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
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.divide(4, 2)).toBe(2);
  });
});
