var promptAnswer = prompt("What is your name?");

var retrievedSpan = document.getElementById("name");

console.log("promptAnswer: ", promptAnswer)
console.log("retrievedSpan: ", retrievedSpan)

retrievedSpan.innerHTML = promptAnswer;

var paragraph = document.getElementById('p1');

paragraph.textContent = "Something about the weather";