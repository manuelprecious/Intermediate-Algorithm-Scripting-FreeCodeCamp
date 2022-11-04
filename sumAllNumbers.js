/**
 * Sum All Numbers in a Range
 * 
 * We'll pass you an array of two numbers. Return the sum of those two numbers
 * plus the sum of all the numbers between them. The lowest number will not always come first.
 * 
 * For example, sumAll([4, 1]) should return 10 because sum of all the numbers
 * between 1 and 4 (both inclusive) is 10.
 * 
 * 
 * SumAll([1, 4]) should return a number.
 * sumAll([1, 4]) should return 10.
 * sumAll([4, 1]) should return 10.
 * sumAll([5, 10]) should return 45.
 * sumAll([10, 5]) should return 45.
 */

function sumAll(arr){
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);

    let numberRange = 1 + (maxNum - minNum)
    let rangeArr = [];

    for(let i = 0; i < numberRange; i++){
        rangeArr.push(minNum + i);
    }

    return rangeArr.reduce((accumulator, initialValue)=>accumulator+=initialValue);
}

console.log(sumAll([1, 4]));