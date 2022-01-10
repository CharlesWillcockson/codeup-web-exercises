function tripleValue(num){
    return parseInt(num) * 3;
}


function lengthString(num, str){
    if (num === str.length){
        return 'matches length'
    }else return 'lengths dont match'
}


function findDay(day){
    if (day === 'Sunday'){
        return 1
    }else if (day === 'Monday'){
        return 2
    }else if (day === 'Tuesday'){
        return 3
    }else if (day === 'Wednesday'){
        return 4
    }else if (day === 'Thursday'){
        return 5
    }else if (day === 'Friday'){
        return 6
    }else if (day === 'Saturday'){
        return 7
    }else return 'Thats not even a day!'
}

function seperate(str){
    return str.split('')
}

let loop = 0;
function oneThirtyThree(str){
    while (loop < 133){
        console.log(str);
        loop ++;
    }
}

function rightTriangle(str){
    str.split('');
    for (let i = 0; i < str.length; i++){
        str[i] += [i];
        console.log(str[i]);
    }
}

console.log(rightTriangle('Codeup'));