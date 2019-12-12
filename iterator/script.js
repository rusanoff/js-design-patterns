/**
 * Iterator (итератор) - поведенческий паттерн, который дает возможность последовательно
 * обходить элементы состаных объектов, не раскрывая их внутреннее представление
 */

class BaseIterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

class Iterator {
  constructor(elements) {
    this.index = 0;
    this.keys = Object.keys(elements);
    this.elements = elements;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const collection = new BaseIterator(['Audi', 'BMW', 'Tesla', 'Lada']);
const autos = {
  audi: {
    model: 'Audi',
    color: 'Black',
    price: 3000,
  },
  bmw: {
    model: 'BMW',
    color: 'Black',
    price: 4300,
  },
  tesla: {
    model: 'Tesla',
    color: 'White',
    price: 5000,
  },
};

while (collection.hasNext()) {
  console.log(collection.next());
}

const autosCollection = new Iterator(autos);

while (autosCollection.hasNext()) {
  console.log(autosCollection.next());
}
