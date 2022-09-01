// test the max-num funtion

const maxNum = require('../max-num')

describe("maxNum", () => {
    it("should take an array of numbers and return the max number.", () => {
        let numArr = [3, 5, 1, 9, 4, 19, 14, 8];
        let result = maxNum(numArr);

        expect(result).toEqual(19)
    });
});