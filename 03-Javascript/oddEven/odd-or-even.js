// this algorith will take a number as an argument and check to see if it's odd or even

const oddEven = (num) =>{
    let answer = num % 2
    if (answer === 1) {
        return (`${num} is an odd number`)  
    } else if (answer === 0) {
        return (`${num} is an even number`)
    } else {
        return (`${num} is an invalid argument`)
    }
};

// console.log(oddEven(4));
// console.log(oddEven(7));
// console.log(oddEven('sandwich'));

module.exports = oddEven