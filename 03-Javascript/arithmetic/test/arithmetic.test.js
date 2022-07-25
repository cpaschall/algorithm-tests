// writing a test script and installing jest to run the test.

const arithmetic = require("../arithmetic.js")

describe("add", function() {
    it("should add two numbers", function() {
        let num1 = 1;
        let num2 = 2;
        let result = arithmetic.add(num1, num2);

        expect(result).toEqual(3);
    });
});

describe("subtract", () => {
    it("should subtract two numbers", () => {
        let num1 = 4;
        let num2 = 3;
        let result = arithmetic.subtract(num1, num2);

        expect(result).toEqual(1)
    })
});

describe("multiply", () => {
    it("should multiply two numbers", () => {
        let num1 = 3;
        let num2 = 2;
        let result = arithmetic.multiply(num1, num2);

        expect(result).toEqual(6)
    })
});

describe("division", () => {
    it("should divide two numbers", () => {
        let num1 = 12;
        let num2 = 3;
        let result = arithmetic.divide(num1, num2);

        expect(result).toEqual(4)
    })
});