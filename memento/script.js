/**
 * Memento (снимок) - поведенческий паттерн, который позволяет сохранять и восстанавливать
 * предыдущее состояние объекта
 */

class Memento {
  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: (val) => {
    return new Memento(val);
  },
  restore: (memento) => {
    return memento.value;
  },
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

const careTaker = new Caretaker();

careTaker.addMemento(creator.save('Hello'));
careTaker.addMemento(creator.save('Hello World'));
careTaker.addMemento(creator.save('Hello World !!!'));

console.log(creator.restore(careTaker.getMemento(1)));
