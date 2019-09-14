/**
 * Decorator (декоратор) - добавляет объектам новые свойства и методы, то есть является оберткой над объектами,
 * которая эти объекты расширяет
 */

// Базовый класс
class Car {
  constructor() {
    this.price = 100000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

// Класс, созданный от базового
class TeslaCar extends Car {
  constructor() {
    super();
    this.price = 10000000;
    this.model = 'Tesla';
  }
}

// Класс, созданный от базового
class AudiCar extends Car {
  constructor() {
    super();
    this.price = 4000000;
    this.model = 'Audi';
  }
}

// Декоратор
class Autopilot {
  constructor(car) {
    this.car = car;
    this.price = 50000;
  }

  getPrice() {
    return this.car.getPrice() + this.price;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

// Декоратор
class Parktronic {
  constructor(car) {
    this.car = car;
    this.price = 30000;
  }

  getPrice() {
    return this.car.getPrice() + this.price;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

let tesla1 = new TeslaCar();

tesla1 = new Autopilot(tesla1);
tesla1 = new Parktronic(tesla1);

let tesla2 = new TeslaCar();

tesla2 = new Autopilot(tesla2);

let audi = new AudiCar();

audi = new Autopilot(audi);
audi = new Parktronic(audi);

console.log(tesla1.getPrice()); // 10080000
console.log(tesla1.getDescription()); // Tesla with autopilot with parktronic
console.log(tesla2.getPrice()); // 10050000
console.log(tesla2.getDescription()); // Tesla with autopilot
console.log(audi.getPrice()); // 4080000
console.log(audi.getDescription()); // Audi with autopilot with parktronic
