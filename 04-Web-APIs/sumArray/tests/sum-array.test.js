const sumArr = require('../sum-array');

describe("sum-aaray", () => {
    it("should return the total sume of all numbers in an array", () => {
        let numArr = [1, 2, 3, 4, 5];
        let result = sumArr(numArr);
        let total = 15;

        expect(result).toEqual(total)
    })
});