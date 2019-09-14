/**
 * Prototype (прототип) - позволяет копировать объекты не вдаваясь в подробности их реализации
 */

// Базовый класс
class Car {
  constructor(carMake, model, price, maxSpeed, issueYear) {
    this.carMake = carMake;
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.issueYear = issueYear;
  }

  produce() {
    return new Car(this.carMake, this.model, this.price, this.maxSpeed, this.issueYear);
  }
}

// Прототип
const prototypeCar = new Car('BMW', 'X6', null, 320, 2019);

// Клоны
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.price = 10000000;
car2.price = 9999990;
car3.price = 8990999;

console.log(car1.price); // 10000000
console.log(car2.price); // 9999990
console.log(car3.price); // 8990999
