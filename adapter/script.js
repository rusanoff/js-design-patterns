/**
 * Adapter (адаптер) - оборачивает несовместимый с чем-то объект и делает его совместимым, не изменяя его
 * исходный код
 */

// Несовместимый класс
class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 - tr-tr-tr');
  }
}

// Несовместимый класс
class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8! - wroom wroom!');
  }
}

// Адаптер
class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

// Класс для проверки
class Car {
  startEngine(engine) {
    engine.simpleInterface()
  }
}

const car = new Car();

const oldEngine = new Engine2();
const newEngine = new EngineV8Adapter(new EngineV8());
const v8Engine = new EngineV8();

car.startEngine(oldEngine); // Engine 2.0 - tr-tr-tr
car.startEngine(newEngine); // Engine V8! - wroom wroom!
car.startEngine(v8Engine); // ERROR: engine.simpleInterface is not a function
