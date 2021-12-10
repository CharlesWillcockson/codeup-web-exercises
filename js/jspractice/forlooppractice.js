// Practice exercises from Coding Tutor Blog

//Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let sum1 = 0;
let arr_2 = [4, 6, 34, 7, 9, 10, 20, 30, 25, 15, 35]
let sum2 = 0
let total = 0

for (i=0; i<arr_1.length; i++) {
    sum1 += arr_1[i];
}

for (j=0; j<arr_2.length; j++) {
    sum2 += arr_2[j];
}
total = sum1 + sum2;

// ----------------------------------------------------------------------
//Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 29;

for (i=1; i<=n1; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

//----------------------------------------------------------------------
//Using a for loop output the elements in reverse order.

let arreigh = [1, 2, 3, 4, 5]

    arreigh.reverse();
console.log(arreigh);

//-----------------------------------------------------------------------
//Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
let results = [];

for (i=0; i < arr_3.length; i++){
    results.push(arr_3[i] + arr_4[i]);
}

console.log(results);

//--------------------------------------------------------------------------

//Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

let str = "codeup";
let strArr = str.split("");

for (i=0; i < strArr.length; i++){
    if (strArr[i] % 2 === 0){
      strArr[i].toUpperCase(){
    }
    str = strArr.join("");
}

console.log(i);


    String.prototype.toJadenCase = function (str) {
        let arr = this.split(' ');

        for (i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
        }
        return arr.join(' ');
    };