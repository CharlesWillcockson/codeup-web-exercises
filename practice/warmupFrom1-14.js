// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.

    const array1 = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];
    let array2 =[];

    for (let i = 0; i < array1.length; i++){
        if (array1[i].length === 4){
            array2.push(array1[i]);
        }
    }

console.log(array2);
