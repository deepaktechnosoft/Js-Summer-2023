const RestaurantSoftware = require("./RestaurantSoftware");

let r1, r2,r3,r4;
try {
  r1 = new RestaurantSoftware("First", 200, 15);
} catch (e) {
    console.log('Try again with valid data');
}


try {
    r2 = new RestaurantSoftware("Second", 300, 20);
} catch (e) {
    console.log('Try again with valid data');
}


try {
    r3 = new RestaurantSoftware();
} catch (e) {
    console.log('\nTry again with valid data');
    console.log(e);
}

try {
    r4 = new RestaurantSoftware("Fourth", 400, 50);
} catch (e) {
    console.log('\nTry again with valid data');
    console.log(e);
}


// try {

//     r1 = new RestaurantSoftware("First", 200, 15);

//     r2 = new RestaurantSoftware("Second", 300, 20);

//     r3 = new RestaurantSoftware();

//     r4 = new RestaurantSoftware("Fourth", 400, 50);

// } catch (e) {
//     console.log('Try again with valid data');
// } finally {
//     console.log("\n\nIn the finally block\n\n");
// }


r1.showRestaurantDetail();

r2.showRestaurantDetail();

r3.showRestaurantDetail();

r4.showRestaurantDetail();
