// Algorithm that adds all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let total = arr.reduce((a, b) => a+b, 0);
    return total
};

// console.log(sumArray([1,2,3,4,5]));

module.exports = sumArray;