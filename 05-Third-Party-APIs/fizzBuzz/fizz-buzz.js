// An algorithm that loops through an array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log("Fizz Buzz");
        } else if (arr[i] % 3 === 0) {
            console.log("Fizz");
        } else if (arr[i] % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(arr[i])
        }
    }
};

// fizzBuzz([3, 4, 2, 15, 5, 9, 1, 10, 30, 7]);

let numArr = [1, 3, 4, 5, 6, 7, 15, 19];
fizzBuzz(numArr);

module.exports = fizzBuzz;