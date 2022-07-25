// test to validate logEven algoritm is functioning properly

const logEven = require('../log-even-nums')

describe('log-even-nums', () => {
    it("should return all even numbers up to and including a number enetered as an argument", () => {
        let num = 19;
        let evenArr = [2, 4, 6, 8, 10, 12, 14, 16, 18]
        let result = logEven(num);

        expect(result).toEqual(evenArr);
    })
});