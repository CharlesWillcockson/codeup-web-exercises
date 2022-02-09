// write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
//
// input example: "bJIENsdfRAIRVIrsRFAijgRar"

// function checkCase(str){
//     let character = '';
//     while(i <= stringToFilter){
//         if (array[i] === array[i].toLowerCase()){
//             return (array[i] + ' is lower case!');
//         }else {
//             return (array[i] + ' is upper case!!');
//         }
//     }
// }
//
// console.log(checkCase('DsDsSW'));

// let numArray = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7]
//
// function removeDupes (numArray) {
//     return numArray.filter((num, index) => numArray.indexOf(num) === index);
// }
// console.log(removeDupes(numArray));

function numVowels(str){
    const regex = /[aeiou]/gi;
    const count = str.match(regex).length;
    return count;

}

console.log(numVowels('helicopter'));