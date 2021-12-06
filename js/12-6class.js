let person = {}

let array = [1, 2, 3, true, false];

// let person = new Object();
//The other way to do it (object literal);

person['name'] = "Matt Lewis";
person.birthday = "Sep.22";

let birthdayObject = {
    month:"November",
    day: 22
    getDetails: function(){
        return this.month + "," + this.day
    }
}
person = {
    name: "Jack",
    birthday: birthdayObject,
    isTall: false
}

console.log(person.birthday.day);

let dog = {
    breed: "Husky",
    color: ['brown', 'black', 'white'],
    sex: "f";
    isFloofer: true,
    getDetails: function(){
        return this.breed + ", " + this.color + ", "
    }
}

