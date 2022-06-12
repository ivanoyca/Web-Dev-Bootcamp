function HouseKeepers(yearsOfExperience, fname, cleaningZones) {
    this.yearsOfExperience = yearsOfExperience
    this.fname = fname
    this.cleaningZones = cleaningZones
    this.cleanNow = function () {
        console.log("Cleaning now...")
    }
}

let houseKeeper1 = new HouseKeepers(10, "Ofelia", ["Bedrooms", "Kitchen", "Living Room"])

console.log(houseKeeper1.cleanNow())