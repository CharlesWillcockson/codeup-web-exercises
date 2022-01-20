// write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
//
// input example: "bJIENsdfRAIRVIrsRFAijgRar"

function checkCase(str){
    let array = str.split('');
    for (i=0; i < array.length; i++){
        if (array[i] === array[i].toLowerCase()){
            return (array[i] + ' is lower case!');
        }else {
            return (array[i] + ' is upper case!!');
        }
    }
}

console.log(checkCase('DsDsSW'));