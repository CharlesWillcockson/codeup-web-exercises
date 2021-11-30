function averageScore(score1, score2, score3){
    return ("The average score is " + ((score1 + score2 + score3) / 3));
}

console.log(averageScore(200, 150, 250));

function threeOrFive(topScore){
    if ((topScore % 3 == 0) || (topScore % 5 == 0)){
        return true;
    }else return false;
}

console.log(threeOrFive(14))
//-------------------------------------------------------
function lowerCase(input){
    return input.toLowerCase();
}

console.log(lowerCase("ThEbEsTbOwLiNgPlAcEever"));
//--------------------------------------------------------------------
let score = 109;
let name = "bowling is fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"];

function typeVars(input){
    return typeof(input) ;
}

console.log(typeVars(score));
console.log(typeVars(name));
console.log(typeVars(isBowlingFun));
console.log(typeVars(players));
//---------------------------------------------------------------------

function allFunkshuns(){
    (averageScore(200, 250, 200));
    (threeOrFive(200));
    (lowerCase("ChArLeS"));
    return (typeVars(name));
}

console.log(allFunkshuns())
//-------------------------------------------------------------------
function myFunction (firstName, lastName){
    return firstName + "" + lastName; };

function thatsNotMyName(name) {
    if (name == "Laura") {
        return ("that's me!, I'm " + "name");
    } else return ("that's not my name");
}

console.log (myFunction("Charles ", "Willcockson"));
console.log(thatsNotMyName("Charles"));