/**
 * Visitor (посетитель) - поведенческий патерн, который добавляет функциональность в классы,
 * не изменяя их исходный код, т.е. расширяет функцианальность классов
 */

class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'It is a Tesla car';
  }
}

class Bmw extends Auto {
  info() {
    return 'It is a BMW car';
  }
}

class Audi extends Auto {
  info() {
    return 'It is a Audi car';
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) {
    auto.export = console.log(`Exported data: ${auto.info()}`);
  }
  if (auto instanceof Bmw) {
    auto.export = console.log(`Exported data: ${auto.info()}`);
  }
  if (auto instanceof Audi) {
    auto.export = console.log(`Exported data: ${auto.info()}`);
  }
}

const tesla = new Tesla();
const bmw = new Bmw();
const audi = new Audi();

tesla.accept(exportVisitor);
bmw.accept(exportVisitor);
audi.accept(exportVisitor);
