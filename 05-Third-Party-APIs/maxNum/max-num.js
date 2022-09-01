// algorith to find the max number in an array of numbers

var maxNum = function(arr) {
    let result = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > result) {
            result = arr[i]
        }
    }
    console.log(result);
    return result;
};

maxNum([4, 2, 8, 1, 5, 12, 6, 9])