//  writing a test to check if number is odd or even

const oddEven = require('../odd-or-even')

describe("Odd or Even", () => {
    it("should take a numeric argument and determine if it's odd or even", () => {
        let num1 = 6;
        let num2 = 9;
        let nonNum = "peanuts";

        let evenResult = oddEven(num1);
        let oddResult = oddEven(num2);
        let nonResult = oddEven(nonNum);

        expect(evenResult).toEqual(`${num1} is an even number`);
        expect(oddResult).toEqual(`${num2} is an odd number`);
        expect(nonResult).toEqual(`${nonNum} is an invalid argument`);
    })
});