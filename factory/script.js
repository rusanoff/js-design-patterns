/**
 * Factory (фабрика) - предполагает множество однотипных объектов с одинаковой структурой, но разными данными,
 * которые могут содержать и свойства и методы.
 * Состоит из 2 классов:
 *    > класс-констркутор, который генерирует новый объект
 *    > класс, который вызывает это создание с определенными параметрами, супер-класс
 * Классов-конструкторов может быть несколько, и в корневом супер-классе Фабрике просто вызывается один из них,
 * в зависимости от переданного параметра
 */

/**
 * Минус фабрики в том, что при большом количестве создаваемых объектов структура фабричного метода начнет разрастаться
 */

// Фабрика
class CarFactory {
  create(carMake, model) {
    const type = carMake.toLowerCase();

    switch (type) {
      case 'bmw': return new Bmw(carMake, model, 108000, 300);
      case 'audi': return new Audi(carMake, model, 111000, 320, 2019);
    }
  }
}

// Класс-конструктор
class Bmw {
  constructor(carMake, model, price, maxSpeed) {
    this.carMake = carMake;
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

// Класс-конструктор
class Audi {
  constructor(carMake, model, price, maxSpeed, issueYear) {
    this.carMake = carMake;
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.issueYear = issueYear;
  }
}

const factory = new CarFactory();

const bmw = factory.create('Bmw', 'X6');
const audi = factory.create('Audi', 'A8');

console.log(bmw.carMake, bmw.model); // Bmw X6
console.log(audi.carMake, audi.model); // Audi A8
