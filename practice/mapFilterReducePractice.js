const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

// Create an array of the first letters of each fruit
const firstLetter = fruits.map(fruit => fruit[0]);
console.log(firstLetter);

// Create array of user objects based on the customers array of objects (each user object should just have name and age properties)
const users = customers.map(customer => ({name: customer.name, age: customer.age}));
console.log(users);

// Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects
const civilServants = customers.filter(customer => customer.occupation === "Teacher" || customer.occupation === "Police Officer");
console.log(civilServants);

// Determine the average age of all the customers
const avgAge = customers.reduce((total, current) => {
    return (total + current.age);
},0) / customers.length;
console.log(avgAge);

// Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
//
// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
//
let SPname = pets.reduce(function (names, item){
  return names + item.name
}, "")
let SPAge = pets.reduce((total, current) => {
    return total + current.age;
}, 0);
let SPbreed = pets.map(pet => pet.breed[0]).join('');
const makeSuperPet = ({name: SPname, age: SPAge, breed: SPbreed});
console.log(makeSuperPet);

// Create a function that takes in an array of pets and returns an array of the length of first names for pugs only. Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'
let pugs = pets.filter(pet => pet.breed === "Pug")
let pugFirst = pugs.map(pug => pug.name.length)
console.log(pugFirst);

// Create a function getFemaleFamilyMembers() that when given the family variable as an argument, returns an array of female family member names
let getFemaleFamilyMembers = family.filter(member => member.gender === "female")
console.log(getFemaleFamilyMembers)

// Create a function makeLongPetString() that when given the variable of pets, returns a string of all property values with dashes separating each property value

// Create a function that when given an array of first names, returns an array of the same names with a last name of Smith
//
let firstNames = ['Sally', 'Fred', 'Steve']
// // output = ['Sally Smith', 'Fred Smith', 'Steve']
let smiths = firstNames.map(name => name + " Smith");
console.log(smiths)

// Create a function that when given an array of numbers, return the sum of the even numbers
let numz = [1, 2, 43, 52, 11, 6];
let evenz = numz.filter(num => num % 2 === 0)
let sumEvenz = evenz.reduce((total, current) => {
    return total + current
}, 0)
console.log(sumEvenz)

// Create a function that when given an array of numbers, return the sum of all numbers evenly divisible by 10
let numeros = [10, 20, 33,100, 35, 2000];
let byTen = numeros.filter(num => num % 10 === 0);
let totalTen = byTen.reduce((total, current) => {
    return total + current
}, 0)
console.log(totalTen)