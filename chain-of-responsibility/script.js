/**
 * Chain of responsibility (цепочка обязанностей) - это поведенческий паттерн, который позволяет
 * передавать запросы последовательно по цепочке обработчиков, причем его особенность в том, что
 * каждый последующий обработчик решает задачу того, может ли он сам обработать запрос или его нужно
 * передать дальше по цепочке
 */

class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Can not pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      console.log('Unfortunately, not enough money');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }
}

class Master extends Account {
  constructor(balance) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'PayPall';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

master.setNext(paypal);
paypal.setNext(qiwi);

master.pay(438);
