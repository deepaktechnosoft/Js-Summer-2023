class RestaurantSoftware {

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
    static idGenerator = 0;

    constructor(restaurantName, restaurantMaxCapacity, restaurantEmployeeCount) {
        if (restaurantMaxCapacity>0 && restaurantEmployeeCount>0 && typeof restaurantName === 'string') {
            this.rData.name = restaurantName;
            this.rData.maxCapacity = restaurantMaxCapacity;
            this.rData.numOfEmployees = restaurantEmployeeCount;
            this.rData.numOfAvailableSeats = restaurantMaxCapacity;
            this.rData.numOfGuestsSeating = 0;
            this.rData.numOfGuestsServedSoFar = 0;
            this.rData.id = ++RestaurantSoftware.idGenerator;
            console.log(`\nregister: Thank you for registering your restaurant. Your restaurant id is ${this.rData.id}`);
        } else {
            throw(`register: Invalid data supplied.\nRestaurant Name: ${restaurantName}\nRestaurant max capacity: ${restaurantMaxCapacity}\nRestaurant employee count: ${restaurantEmployeeCount}`)
        }
    }

    getCurrentGuestCount() {
        return this.rData.numOfGuestsSeating;
    }

    getAvailableSeats() {
        return this.rData.numOfAvailableSeats;
    }

    addGuests(guestCount) {
        if (guestCount > 0) {
            if (this.rData.numOfAvailableSeats >= guestCount) {
                this.rData.numOfGuestsSeating += guestCount;
                this.rData.numOfGuestsServedSoFar += guestCount;
                this.rData.numOfAvailableSeats -= guestCount;
                console.log(`\naddGuests: Number of guestCount updated. Current guests count: ${this.rData.numOfGuestsSeating}`);
            } else {
                console.log('\naddGuests: Please ask guests to wait for 15mins');
            }
        } else {
            console.log(`\naddGuests: Invalid guests Count(${guestCount})`);
        }
    }

    removeGuests(guestCount) {
        if (guestCount > 0 && guestCount <= this.rData.numOfGuestsSeating) {
            this.rData.numOfGuestsSeating -= guestCount;
            this.rData.numOfAvailableSeats += guestCount;
            console.log(`\nremoveGuests: Number of guestCount updated. Current guests count: ${this.rData.numOfGuestsSeating}`);
        } else {
            console.log(`\nremoveGuests: Invalid guests Count(${guestCount})`);
        }
    }

    showRestaurantDetail() {
        console.log(`\n\n**** Restaurant Detail ****
        Id: ${this.rData.id}
        Name: ${this.rData.name}
        Address: ${this.rData.address}
        Max Capacity: ${this.rData.maxCapacity}
        Employee Count: ${this.rData.numOfEmployees}
        Current guest count: ${this.rData.numOfGuestsSeating}
        Guests served so far: ${this.rData.numOfGuestsServedSoFar}`);
    }

    static newSmokingLaws() {
        console.log("New Smoking Laws");
    }

}
module.exports = RestaurantSoftware;