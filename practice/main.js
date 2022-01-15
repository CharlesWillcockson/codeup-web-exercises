"use strict"
let coffees = function () {
    if (localStorage.getItem("coffees") !== null) {
        return JSON.parse(localStorage.getItem("coffees"));
    } else {
        return [
            {id: 1, name: 'Light City', roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 2, name: 'Half City', roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 3, name: 'Folgers', roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 4, name: 'Double Light', roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 5, name: 'Light Bulb', roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 6, name: 'Cinnamon', roast: 'light', image: "light-roast-coffee-bean.jpeg"},
            {id: 7, name: 'City', roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 8, name: 'American', roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 9, name: 'Breakfast', roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 10, name: 'Medrano', roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 11, name: 'Spicy', roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 12, name: 'Pickle Coffee', roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 13, name: 'San Antonio', roast: 'medium', image: "medium-roasts-coffee-bean.jpeg"},
            {id: 14, name: 'High', roast: 'dark', image: "dark-roast.jpeg"},
            {id: 15, name: 'Continental', roast: 'dark', image: "dark-roast.jpeg"},
            {id: 16, name: 'New Orleans', roast: 'dark', image: "dark-roast.jpeg"},
            {id: 17, name: 'European', roast: 'dark', image: "dark-roast.jpeg"},
            {id: 18, name: 'Espresso', roast: 'dark', image: "dark-roast.jpeg"},
            {id: 19, name: 'Viennese', roast: 'dark', image: "dark-roast.jpeg"},
            {id: 20, name: 'Italian', roast: 'dark', image: "dark-roast.jpeg"},
            {id: 21, name: 'French', roast: 'dark', image: "dark-roast.jpeg"}
        ]
    }
}();

// THIS FUNCTION RESETS LOCALSTORAGE AND RELOADS THE PAGE
function resetArray(){
    window.localStorage.removeItem('coffees');
    location.reload();
}

function renderCoffee(coffee) {
    let html = '<div class="col-6 col-lg-3 coffee-box m-0 p-3">'
    html += '<div><h2>' + coffee.name + '</h2></div><hr><div><h3>' + coffee.roast + '</h3></div><div class="img-holder"><img class="img-fluid" src="' + coffee.image + '"></div></div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    let selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    let filteredCoffees = [];
    if (selectedRoast === 'all roasts') {
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        })
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

function searchForCoffee() {
    let searchedForCoffee = document.querySelector('#coffeeName').value.toLowerCase();
    let searchedCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().startsWith(searchedForCoffee)) {
            searchedCoffees.push(coffee);
        }
    })
    tbody.innerHTML = renderCoffees(searchedCoffees);
}

function addACoffee() {
    let newCoffeeInfo = {};
    let newName = newCoffeeName.value;
    let newRoast = newCoffeeRoast.value;
    newCoffeeInfo.id = coffees.length + 1;
    newCoffeeInfo.name = newName;
    newCoffeeInfo.roast = newRoast;
    if(newName === ""){
        return;
    }
    if(newRoast === ""){
        return;
    }
    else if (newRoast === 'light'){
        newCoffeeInfo.image = "light-roast-coffee-bean.jpeg"
        coffees.unshift(newCoffeeInfo);
    }else if (newRoast === 'medium'){
        newCoffeeInfo.image = "medium-roasts-coffee-bean.jpeg"
        coffees.splice((coffees.length / 2), 0, newCoffeeInfo);
    }else {
        newCoffeeInfo.image = "dark-roast.jpeg"
        coffees.push(newCoffeeInfo);
    }

    tbody.innerHTML = renderCoffees(coffees);
    localStorage.setItem('coffees', JSON.stringify(coffees));
    location.reload();
}

function laughSound(){
    let haHa = new Audio("the-simpsons-nelsons-haha.mp3");
    haHa.play();
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// let coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];

let newCoffeeName = document.querySelector('#newCoffee');
let newCoffeeRoast = document.querySelector('#selectRoast');
let tbody = document.querySelector('#coffees');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

