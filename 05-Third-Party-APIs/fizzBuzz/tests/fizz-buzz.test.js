// test the fizzBuzz function

const fizzBuzz = require('../fizz-buzz')

describe("fizz-buzz", () => {
    it("should take an array of numbers and log 'Fizz' for any number divisible by 3, 'Buzz' for numbers divisible by 5 and 'Fizz Buzz' for numbers divisible by 3 and 5 and just the number if the number is not divisible by 3 or 5.", () => {
        let numArr = [1, 3, 4, 5, 6, 7, 15, 19];
        let result = fizzBuzz(numArr);
        // let answer = [1, "Fizz", 4, "Buzz", "Fizz", 7, "Fizz Buzz", 19]
    
        expect(result).toEqual([1, "Fizz", 4, "Buzz", "Fizz", 7, "Fizz Buzz", 19])
    })
});