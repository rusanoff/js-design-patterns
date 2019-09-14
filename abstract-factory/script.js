/**
 * Abstract Factory (абстрактная фабрика) - интерфейс, группирующий другие фабрики, которые логически связаны
 * друг с другом
 */

// Абстрактная фабрика
class CarFactory {
  create(kind = '') {
    const type = kind.toLowerCase();

    switch (type) {
      case 'sport': return new SportCarFactory();
      case 'family': return new FamilyCarFactory();
    }
  }
}

// Фабрика
class SportCarFactory {
  create(carMake = '', model = '') {
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

// Фабрика
class FamilyCarFactory {
  create(carMake = '', model = '') {
    const type = carMake.toLowerCase();

    switch (type) {
      case 'volvo': return new Volvo(carMake, model, 83000, 240);
      case 'kia': return new Kia(carMake, model, 60000, 220, 2019);
    }
  }
}

// Класс-конструктор
class Volvo {
  constructor(carMake, model, price, maxSpeed) {
    this.carMake = carMake;
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

// Класс-конструктор
class Kia {
  constructor(carMake, model, price, maxSpeed, issueYear) {
    this.carMake = carMake;
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.issueYear = issueYear;
  }
}

const carFactory = new CarFactory();

const sportCarProducer = carFactory.create('sport');
const familyCarProducer = carFactory.create('family');

const bmw = sportCarProducer.create('BMW', 'M850i');
const audi = sportCarProducer.create('Audi', 'R8');
const volvo = familyCarProducer.create('Volvo', 'XC90');
const kia = familyCarProducer.create('KIA', 'Sorento');

console.log(bmw.carMake, bmw.model); // BMW M850i
console.log(audi.carMake, audi.model); // Audi R8
console.log(volvo.carMake, volvo.model); // Volvo XC90
console.log(kia.carMake, kia.model); // KIA Sorento
