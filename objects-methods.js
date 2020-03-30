// What is method?
// method is an object's property, who's value is a function.

let resturant = {
    name: 'ABC',
    guistCapacity: 75,
    guistCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guistCapacity - this.guistCount;
        return partySize <= seatsLeft;
    },
    seatParty: function (partySize) {
        return this.guistCount = this.guistCount + partySize;
    },
    removeParty: function (partySize) {
        return resturant.guistCount = resturant.guistCount - partySize;
    }
}

resturant.seatParty(72);
console.log(resturant.checkAvailability(4));
resturant.removeParty(5);
console.log(resturant.checkAvailability(4));

