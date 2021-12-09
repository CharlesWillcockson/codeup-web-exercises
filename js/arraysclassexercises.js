let favFoods = ["pizza", "steak", "cheeseburger", "shrimp", "chile relleno"];
console.log(favFoods);
favFoods[0] += " 1";
favFoods[1] += " 3";
favFoods[2] += " 4";
favFoods[3] += " 5";
favFoods[4] += " 2";
console.log(favFoods)

console.log(favFoods.indexOf("pizza 1"));

let charles = ['Charles', 42, 'San Antonio', ['pizza', 'steak', 'shrimp'], 2021];

let age = charles[1];
let foods = charles[3];
console.log(foods);
console.log(foods[1]);


function solution(number) {
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            return i+=number;
        }else return 0;
    }

    }


function jadenCasing(str){
    words = str.split(" ");
    for (let i=0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ")
};

console.log(jadenCasing("chicken is a delicious treat"));