function showMultiplicationTable(number){
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(number + " x " + i + "=" + result);
    }
}

//---------------------------------------------------------------

for (let i = 0; i < 10; i++){
    var num1 = Math.floor(Math.random() * (200 - 20) + 20);
    if (num1 % 2 === 0){
        console.log (num1 + " is even");
    }else console.log(num1 + " is odd");
}

//------------------------------------------------------------------

for (let i = 1; i <= 9; i++){
    var str = "";
    for (let j = 1; j <= i; j++) {
        str += i;
    }

    console.log(str);
}
for (let k=1; k <= 9; k++) {

    console.log(k.toString().repeat(k));

}

//---------------------------------------------------------------------

for (i = 100; i >= 5; i-=5){
    console.log(i);
}