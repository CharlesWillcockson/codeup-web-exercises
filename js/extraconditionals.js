function getToDestination(age, isInsured, hasCar){
    if(age >= 16 && isInsured && hasCar) {
        console.log("Can use their own vehicle.");
    }else if((age < 16 || !isInsured || !hasCar)){
        console.log("Call Uber or Lyft!");
    }else if (canGetRideshare(true, true)){
        console.log("You can call a Rideshare service for a ride!")
    }
    else console.log("Call a friend for a ride!");
}

function canGetRideshare(hasMoney, driverAvailable){
    if (hasMoney && driverAvailable){
        return true;
    }else return false;
}

getToDestination(15, true, false);