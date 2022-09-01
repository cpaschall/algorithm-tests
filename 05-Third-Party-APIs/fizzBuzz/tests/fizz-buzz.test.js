// test the fizzBuzz function

// const fizzBuzz = require('../fizz-buzz')

// describe("fizz-buzz", () => {
//     it("should take an array of numbers and log 'Fizz' for any number divisible by 3, 'Buzz' for numbers divisible by 5 and 'Fizz Buzz' for numbers divisible by 3 and 5 and just the number if the number is not divisible by 3 or 5.", () => {
//         let numArr = [1, 3, 4, 5, 6, 7, 15, 19];
//         let result = fizzBuzz(numArr);
//         // let answer = [1, "Fizz", 4, "Buzz", "Fizz", 7, "Fizz Buzz", 19]
    
//         expect(result).toEqual([1, "Fizz", 4, "Buzz", "Fizz", 7, "Fizz Buzz", 19])
//     })
// });

var expect = chai.expect;

before(function() {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = (function(...args) {
    var values = [];

    var log = function(args) {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = function() {
      return values;
    };

    return log;
  })();
});

describe("fizzBuzz", function() {
  it('takes an array and for each element prints "Fizz" for numbers evenly divisible by 3, "Buzz" for numbers evenly divisible by 5, "Fizz Buzz" for numbers evenly divisible by 3 AND 5. Otherwise it prints the number if not evenly divisible by 3 or 5.', function() {
    var arr = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    fizzBuzz(arr);

    expect(console.log.calledWith()).to.eql([
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "Fizz Buzz"
    ]);
  });
});

after(function() {
  console.log = window._temp.log;
  delete window._temp;
});
