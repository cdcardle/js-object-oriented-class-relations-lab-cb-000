let store = { drivers: [], passengers: [], trips: [] }

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }

  passengers() {
    return this.trips().map(
      trip => trip.passenger();
    );
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

  // driver() {
  //   return store.drivers.find(
  //     function(driver) {
  //       return driver.id === this.driverId;
  //     }.bind(this)
  //   )
  // }
  //
  // trips() {
  //   return store.trips.filter(
  //     function(trip) {
  //       return trip.driverId === this.id;
  //     }.bind(this)
  //   );
  // }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    )
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    )
  }
}
