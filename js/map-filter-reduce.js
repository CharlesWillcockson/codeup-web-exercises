"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// use .filter to return an array of people who speak 3 or more languages...

const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

// Use .map to create an array of strings where each element is a user's email address

const userEmail = users.map(user => user.email);
console.log(userEmail);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce((total, current) => {
    return (total + current.yearsOfExperience);
}, 0) / users.length;
console.log(totalYears);

// Use .reduce to get the longest email from the list of users.

let longestEmail = userEmail.reduce((longest, current) => (current.length > longest.length ? current : longest));

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let userString = users.map(users => users.name)
let userString = `Your momma is sleeping with ${users.reduce(function (names, item){
    return names + ' ' + item.name
}, "")}`

console.log(userString)

// BONUS
// Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce((unique, current) => (current.language === unique.language ? current : unique));
console.log(uniqueLanguages)

