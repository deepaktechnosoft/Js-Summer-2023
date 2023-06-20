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


r1.showRestaurantDetail();

r1.addGuests(15);

r1.addGuests(3);

r1.removeGuests(10);

r1.showRestaurantDetail();

r1.addGuests(7);

r1.showRestaurantDetail();






























let r2 = new RestaurantSoftware();
// r2 got it's own copy of rData
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

