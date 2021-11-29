console.log("Hello from external javascript!")

alert("Welcome to my website!");

var color = prompt("What is your favorite color?");
alert(color + " is also my favorite!!!")

var dayslm = prompt("How many days did you rent The Little Mermaid?");
var daysbb = prompt("How many days did you rent Brother Bear?");
var daysherc = prompt("How many days did you rent Hercules");
var x = parseInt(dayslm);
var y = parseInt(daysbb);
var z = parseInt(daysherc);
alert("The grand total for all of your rentals at $3 a day is: $" + ((x + y + z) * 3));

var fb= prompt("How many hours did you work at Meta?");
var amz = prompt("How many hours did you work for Mr. Bezos?");
var goog = prompt("How many hours did you work for Google?");
var fbhrs = parseInt(fb);
var amzhrs = parseInt(amz);
var googhrs = parseInt(goog);
var totalpay = ((fbhrs * 350) + (amzhrs * 380) + (googhrs * 400));
alert ("Your gross pay this week is: $" + (totalpay))