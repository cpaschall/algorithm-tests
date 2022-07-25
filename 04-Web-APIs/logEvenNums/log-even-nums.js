// this algorithm take a number as an argument and returns an array of all even numbers leading up to and including that number.

const logEven = (num) => {
    let evenArr =[];
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenArr.push(i)
        }
    }
    return evenArr
};

// console.log(logEven(19))

module.exports = logEven;  