let isAtBar = true;
let bac = .00;
let age = 22;
let cashOnHand = 4.99;


let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink && isAtBar) {
    console.log("Have a brewski my dude!");
} else if (canHaveADrink && !isAtBar) {
    console.log("Togo brews for you!");
} else {
    console.log("No drinky drinky");
}

let band = {
    band: 'sublime',
    band.shred = function () {
        console.log('RAAAAAAAAAA!!!!');
    }
}
sublime.shred();