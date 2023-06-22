const RestaurantSoftware = require("./RestaurantSoftware");

let r1 = new RestaurantSoftware();
// r1 got it's own copy of rData
/*
    rData = {
        id: 0,
        name : '',
        address: 'NY',
        maxCapacity: -1,
        numOfEmployees: -1,
        numOfGuestsSeating: -1,
        numOfAvailableSeats: -1,
        numOfGuestsServedSoFar: -1
    }
*/

r1.register("First", 200, 15);
/*
    rData = {
        id: 0,
        name : 'First',
        address: 'NY',
        maxCapacity: 200,
        numOfEmployees: 15,
        numOfGuestsSeating: 0,
        numOfAvailableSeats: 200,
        numOfGuestsServedSoFar: 0
    }
*/


let r2 = new RestaurantSoftware();
r2.register("Second", 300, 25);

r1.showRestaurantDetail();

r2.showRestaurantDetail();

// r1.addGuests(15);

// r1.addGuests(3);

// r1.removeGuests(10);

// r1.showRestaurantDetail();

// r1.addGuests(7);

// r1.showRestaurantDetail();

RestaurantSoftware.newSmokingLaws();



let pwd = "test123";

const newPwd = pwd.replace(/[A-Z]*[a-z]*[0-9]*/g, '');

console.log(newPwd);
console.log(pwd);

/**
 * [A-Z]* -> 0 or more occurrences of A-Z
 * [a-z]* -> 0 or more occurrences of a-z
 * [0-9]* -> 0 or more occurrences of 0-9
 */
























