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


    register(restaurantName, restaurantMaxCapacity, restaurantEmployeeCount) {
        // code
    }

    getCurrentGuestCount() {
        return this.rData.numOfGuestsSeating;
    }

    getAvailableSeats() {
        return this.rData.numOfAvailableSeats;
    }

    addGuests(guestCount) {
        // code
    }

    removeGuests(guestCount) {
        // code
    }

    showRestaurantDetail() {
        console.log(`\n\n**** Restaurant Detail ****
        \nId: ${this.rData.id}
        \nName: ${this.rData.name}
        \nAddress: ${this.rData.address}
        \nGuests served so far: ${this.rData.numOfGuestsServedSoFar}`);
    }





}