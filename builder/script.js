/**
 * Builder (строитель) - позволяет создавать сложные объекты, инициализацию которых проблематично уместить
 * в конструкторе
 */

// Класс с дефолтным состоянием
class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

// Строитель, который позволяет инициализировать свойства по цепочке
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const car1 = new CarBuilder()
  .addAutoPilot(true)
  .addParktronic(true)
  .updateEngine('V8')
  .build();

const car2 = new CarBuilder()
  .addSignaling(true)
  .updateEngine('V8')
  .build();

console.log(car1.parktronic); // true
console.log(car2.parktronic); // true
