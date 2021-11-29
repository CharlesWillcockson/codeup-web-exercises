function isOdd(num1) {
    if (num1 % 2 == 0){
        return false;
    }else
        return true;
}

function isEven(num1) {
    if (num1 % 2 == 0) {
        return true;
    }else
        return false;
}

function identity(input){
    return input;
}

function isFive(num1){
    if (num1 === 5){
        return true
    }else
        return false;
}

function addFive(num1){
    return (num1 + 5)
}

function isMultipleOfFive(num1){
    if (num1 % 5 == 0){
        return true;
    }else
        return false;
}

function isThree(num1){
    if (num1 === 3){
        return true;
    }else
        return false;
}

function isMultipleOfThree(num1){
    if (num1 % 3 == 0){
        return true;
    }else return false;
}

function isMultipleOfThreeAndFive(num1){
    if ((num1 % 5 == 0) && (num1 % 3 == 0)){
        return true;
    }else
        return false
}

function isMultipleOf(target, n){
    if (target % n == 0){
        return true;
    }else
        return false;
}

function isTrue(boo1){
    if (boo1){
        return true;
    }else
        return false;
}

function isFalse(boo1){
    if (!boo1){
        return true;
    }else
        return false;
}

function isTruthy(input){
    if (input){
        return true;
    }else return false;
}

function isFalsey(input){
    if (input === false || input === null || input === undefined || input === 0 || input == ""){
        return "This is falsey";
    }else return "Truthy"
}

function isVowel(letter){
    return('aeiouAEIOU'.indexOf(letter) != -1)
}

function isConsonant(letter){
    if ('aeiouAEIOU'.indexOf(letter) != -1){
        return false;
    }else return true;
}

function isCapital(letter){
    if (letter == letter.toUpperCase()){
        return true;
    }else return false;
}

function isLowerCase(letter){
    if (letter == letter.toLowerCase()){
        return true;
    }else return false;
}

function hasLowerCase(str){
    return(/[a-z]/.test(str));
}





