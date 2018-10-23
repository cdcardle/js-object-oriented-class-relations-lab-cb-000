let store = { drivers: [], passengers: [], trips: [] }

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }
}

let passengerId = 0;

class Passenger {
  constructor(name, price, driver) {
    this.id = ++passengerId;
    this.name = name;
    this.price = price;
    if (driver) {this.driverId = driver.id;}

    store.passengers.push(this);
  }
}

let tripId = 0;

class Trips {
  constructor(driver, passenger) {
    this.id = ++tripId;

    if (driver) {this.driverId = driver.id;}
    if (passenger) {this.passengerId = passenger.id;}

    store.trips.push(this)
  }
}
