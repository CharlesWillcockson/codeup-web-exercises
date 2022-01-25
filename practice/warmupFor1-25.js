
function repeatedDupes(str){

    let counter = 1;
    let strArr = str.split('');
    let char = strArr[i]
    let result = {};
    for (let i = 0; i < str.length; i++) {
        if (strArr[i] === strArr [i + 1]) {
            counter++;
        }
        result = Object.assign(result, {$(this).attr('char'):$(this).attr('counter')});

    }
    if (counter > 1){
        result.push()
    }

}


console.log(repeatedDupes(9930201));
