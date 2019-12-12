/**
 * Mediator (посредник) - поведенический патерн, который позволяет уменьшить взаимосвязь классов
 * между собой, вынося межкласовые связи в класс-посредник
 */


class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();

    console.log(`Order name : ${name}. Order auto is ${auto}`);
    console.log(`Additional info ${info}`);

    this.addToConsumersList(name);
  }

  addToConsumersList(name) {
    this.customers.push(name);
  }

  getConsumerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

const mediator = new OfficialDealer();

const andrew = new Customer('Andrew', mediator);
const german = new Customer('German', mediator);

andrew.makeOrder('Tesla', 'With autopilot');
german.makeOrder('Audi', 'With parktronik');

console.log(mediator.getConsumerList());
