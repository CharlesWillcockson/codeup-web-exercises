// function getRandomArbitrary(min, max){
//     return Math.random() * (max - min) + min;
// }

function getRandomInt(min, max){
    const randomNumber = Math.random() * (max - min) + min;
    console.log("before floor || ceil", randomNumber);
    console.log("after floor", Math.floor(randomNumber));
    console.log("after ceil", Math.ceil(randomNumber));
    console.log("after rounding", Math.round(randomNumber));
    return Math.floor(randomNumber);
}

console.log(Math.pow(8,2))