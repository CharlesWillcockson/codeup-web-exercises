

var userNumber = 0;

do {
    userNumber = prompt("Enter an odd number betwixt 1 and 50");
    if (userNumber < 1 || userNumber > 50) {
        alert("Number needs to be between 1 and 50")
    } else if (userNumber % 2 === 0) {
        alert("Make it odd, dummy!");
    } else if (isNaN(userNumber)) {
        alert("Thats not a number, genius!")
    } else {
        alert('You entered a valid number!')
        break;
    }

}while(true)

console.log("Number to skip is " + userNumber);

for (let i = 1; i <= 50; i += 2){
    if (i === userNumber){
        console.log("Yikes: skipping number: " + userNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}

