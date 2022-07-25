// write a test to validate countdown function works properly

const countdown = require('../countdown')

describe("countdown", () => {
    it("should countdown starting with the number entered as the argument all the way down to 1", () => {
        let num = 12;
        let result = countdown(num);
        let numArr = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

        expect(result).toEqual(numArr)
    })
});