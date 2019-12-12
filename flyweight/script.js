/**
 * Flyweight (легковес) - структурный паттерн, который позволяет вместить большее количество
 * определенных объектов в выделенную оперативную память, другими словами - позволяет экономить
 * ресурсы, разделяя общее состояние объетов между собой, вместо хранения одинаковых данных
 * в каждом объекте, что похоже на кеширование данных
 */

class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];

    if (model) {
      return model;
    }

    console.count('model');

    this.models[name] = new Auto(name);

    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
}

const autoFactory = new AutoFactory();

const bmw = autoFactory.create('BMW');
const audi = autoFactory.create('Audi');
const tesla = autoFactory.create('Tesla');
const blackTesla = autoFactory.create('Tesla');

console.log(autoFactory.getModels());
