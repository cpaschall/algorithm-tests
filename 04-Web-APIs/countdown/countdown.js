// algorithm thta returns all numbers from `num` down to 1

const countdown = (num) => {
    let numArr = [];

    for (var i = num; i >= 1; i--) {
        numArr.push(i);
    }

    return numArr
};

// console.log(countdown(23))

module.exports = countdown