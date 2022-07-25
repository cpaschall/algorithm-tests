// creating a test to validate logNum function

const logNum = require('../log-nums')

describe("logNum", () => {
    it("should console log every number from 0 up until and including the number entered as an argument and return all numbers in an array", () => {
        let num = 5;
        let numArray = [0, 1, 2, 3, 4, 5];
        let result = logNum(num);

        expect(result).toEqual(numArray)
    })
})