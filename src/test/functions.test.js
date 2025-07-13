import { capitalizeStr } from "../js/functions";
import {
  reverseStr,
  Calculator,
  caesarCipher,
  analyzeArr,
} from "../js/functions";

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
    expect(calculator.multiply(1, 2)).toBe(2);
  });
  it("Caesar Cipher", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("Xyz", 3)).toBe("Abc");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  it("Analyze array", () => {
    expect(analyzeArr([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
