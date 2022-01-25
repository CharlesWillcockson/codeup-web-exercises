
function repeatedDupes(str){
    const result = [];
    const strArr = str.split("").sort().join("").match(/(.)\1+/g);

    if (strArr != null) {
        strArr.forEach((elem) => {
            result.push(elem[0]);
        });
    }
    return result;
}

console.log(repeatedDupes('902344444'));