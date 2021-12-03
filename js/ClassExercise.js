

/*function goodDay (isCloudy, numPlanes) {
    if ((!isCloudy) && (numPlanes < 10)) {
        console.log("It is a Missy Elliot day!  Supa Dupa Fly!!")
    }else {
        console.log("Just go ahead and drive!")
    }
}

console.log(goodDay(false, 4))*/

function add(num1, num2) {
    return(num1 + num2);
}

function subtract(num1, num2) {
    return(num1-num2);
}

function multiply(num1, num2) {
    return(num1 *num2);
}

function divide(num1, num2) {
    return(num1 / num2);
}

function remainder(num1, num2) {
    return(num1 % num2);
}

// console.log(add(12,8));
// console.log(subtract(12,2));
// console.log(multiply(5,2));
// console.log(divide(20,5));
// console.log(remainder(5,2));

//----------------------------------------------

function reverseString(input) {
    return input.split("").reverse().join("");
}

console.log(reverseString("Charles"));

//----------------------------------------------------

var charlesGrade = 100
var michaelGrade = 89
var billyGrade = 79
var johnGrade = 69
var mindyGrade = 59

function letterGrade(grade){
    if (grade > 90){
        return "A";
    }else if(grade <= 89 && grade >= 80){
        return "B";
    }else if(grade <=79 && grade >= 70){
        return "C";
    }else if(grade <=69 && grade >= 60){
        return "D";
    }else return "F";
}

console.log(letterGrade(charlesGrade));
console.log(letterGrade(michaelGrade));
console.log(letterGrade(billyGrade));
console.log(letterGrade(johnGrade));
console.log(letterGrade(mindyGrade));

//-----------------------------------------------

function gradeLetter(grade){
    return (grade > 90) ? "A"
        : (grade >= 80) ? "B"
        : (grade >= 70) ? "C"
        : (grade >= 60) ? "D"
        : "F";
}

//---------------------------------------------

function letter(grade){
    if (grade > 90){
        grade = 1;
    }else if (grade >=80){
        grade = 2;
    }else if(grade >= 70){
        grade = 3;
    }else if(grade >= 60){
        grade = 4;
    }else grade = 5;
    switch (grade){
        case 1:
            return "A";
        case 2:
            return "B";
        case 3:
            return "C";
        case 4:
            return "D";
        case 5:
            return "F";

    }
}

console.log(letter(65))



