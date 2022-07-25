// creating an algorithm that takes a number as an argument thern returns each number from 0 to/including the argument number

const logNum = (num) => {
    let numArr = []
    for(var i = 0; i <= num; i++) {
        // console.log(i)
        numArr.push(i)
    }
    return numArr
}

// console.log(logNum(9))

module.exports = logNum