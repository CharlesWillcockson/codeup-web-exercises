function identity(input){
    return input;
}

function getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
}

function first(input){
    return input[0];
}

function last(input){
    return input[input.length - 1];
}

function rest(input){
    return input.slice(1);
}

function reverse(input){
    return input.split("").reverse().join("");
}

function isNumeric(input){
    if (typeof input == 'number'){
        return true;
    }else return false;
}

function count(input){
    return input.length
}

function add(a, b){
    return(a + b);
}

function subtract(a, b){
    return(a - b);
}

function multiply(a, b){
    return(a * b);
}

function divide(numerator, denominator){
    return(numerator / denominator)
}

function remainder(number, divisor){
    return (number % divisor);
}

function square(a){
    return (a * a);
}

function sumOfSquares(a, b){
    return(add(square(a), square(b)))
}

function doMath(operator, a, b){
    return (operator(a, b));
}

