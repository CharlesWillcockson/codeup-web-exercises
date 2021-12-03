// let i = 2;
//
// while (i <= 70000){
//     console.log(i);
//     i = (i * 2);
// }

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    let conesUsed = Math.floor(Math.random() * 5) + 1;
    if (allCones > conesUsed){
        console.log("You sold " + conesUsed + " cones!" + " You now have " + allCones + " cones left");
    }else if(allCones < conesUsed){
        console.log("You cannot make a sale for " + conesUsed + " cones, you only have " + allCones + " cones left!")
    }else console.log("You are sold out!")
    allCones = (allCones - conesUsed);
} while (allCones > 0);