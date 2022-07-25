// arimetic algoritm to return values of 2 numbers

// addition
const add = (num1, num2) => {
    return num1 + num2
};

// subtraction
const subtract = (num1, num2) => {
    return num1 - num2
};

// multiplication
const multiply = (num1, num2) => {
    return num1 * num2
};

// division
const divide = (num1, num2) => {
    return num1 / num2
};


console.log(`2 + 4 equals ${add(2,4)}`);
console.log(`5 - 2 equals ${subtract(5,2)}`);
console.log(`3 * 4 equals ${multiply(3,4)}`);
console.log(`10 / 5 equals ${divide(10,5)}`);

module.exports = {
    add,
    subtract,
    multiply,
    divide
}