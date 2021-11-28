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
    if (boo1 === true){
        return true;
    }else
        return false;
}

function isFalse(boo1){
    if (boo1 === false){
        return true;
    }else
        return false;
}

function isTruthy(input){
    if (input == true){
        return true;
    }else return false;
}

function isFalsy(input){
    if (input == false){
        return true;
    }else return false;
}

