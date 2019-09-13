/**
 * Singleton (одиночка) - объект в единном экземпляре, к которому может быть доступ из разных частей программы
 */

/**
 * При создании каждого нового Counter-а, созданный объект ссылается на экземпляр статического свойства конструктора
 * (instance), т.е. каждый Counter сслыется на Counter.instance, который создался один раз
 */

class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }

    this.count = 0;

    Counter.instance = this;

    return this;
  }

  getCount() {
    return this.count;
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }
}

const myCounter1 = new Counter();
const myCounter2 = new Counter();

myCounter1.increase();
myCounter1.increase();
myCounter2.increase();
myCounter2.increase();

myCounter1.decrease();
myCounter2.decrease();

console.log(myCounter1.getCount()); // 2
console.log(myCounter2.getCount()); // 2
