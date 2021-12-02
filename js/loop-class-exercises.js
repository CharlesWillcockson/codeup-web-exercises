// let i = 0;
//
// while (i < 10){
//     console.log("iteration: ", i);
//     i++;
// }

// let emptySpotz = 0;
//
// while (emptySpotz <= 20){
//     console.log("There are " + emptySpotz + " parking spots available");
//     emptySpotz++;
// }
//
// let i = 0;
// while (i <= 15){
//     i++;
//     console.log(i)
// }
//Do While----------------------------------------------------
// let i = 0;
// // do{
// //     i++
// //     console.log(i);
// // }while (i <= 15);
//
//
//
// do {
//     console.log(i)
//     i = (i + 2);
// }while (i <= 50);


// let i = 0;
//
// while (i < 10){
//     i++
//     console.log(i)
// }
//
// console.log("-----------------------------")
//
// let j = 0;
// do{
//     j++;
//     console.log(j);
// }while (j <= 10);

let pword = "Banana";
let pword1 = prompt("Please enter your password: ");

while (pword1 != pword){
    alert("Password is incorrect");
    pword1 = prompt('Try again: ');
}
alert ("Password accepted");



