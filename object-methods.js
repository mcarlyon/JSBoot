let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let currentCapacity = this.guestCapacity - this.guestCount 
        //return partySize > currentCapacity ? false : true
        return partySize <= currentCapacity
    },
    seatParty: function(partySize){
        this.guestCount += partySize
        // if (this.checkAvailability(partySize)){
        //     this.guestCount += partySize 
        // } else {
        //    console.log("No bookings available")
        //}
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));