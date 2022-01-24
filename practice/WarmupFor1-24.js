// PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34 (edited)

function sumDigits(num){
    let sum = 0;
    let numArr = num.split('');
    let realNums = numArr.map(Number);
    for (let i = 0; i < realNums.length; i++){
        sum += realNums[i];
    }
    return sum;
}

console.log(sumDigits("42958372"));

