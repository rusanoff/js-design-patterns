/**
 * Bridge (мост) - пораждающий паттерн, который разделяет один или несколько классов на отдельные
 * иерархии, которые называются Абстракция и Реализация, что в свою очередь помогает изменять
 * их в независимости друг от друга
 */

class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super('black');
  }
}

class SilbrigColor extends Color {
  constructor() {
    super('silbrig');
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Model: Audi, color: ${this.color.get()}`;
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Model: BMW, color: ${this.color.get()}`;
  }
}

const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint())
