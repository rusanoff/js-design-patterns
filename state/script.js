/**
 * State (состояние) - поведенческий паттерн, который позволяет менять объектам свое поведение
 * в зависимости от состояния, что со стороны выглядит так, будто в работу включился другой класс
 */

class OrderStatus {
  constructor(name, nexStatus) {
    this.name = name;
    this.nextStatus = nexStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('Waiting for payment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('Shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('Delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }

  cancelOrder() {
    this.state.name === 'Waiting for payment'
      ? console.log('Order is canceled')
      : console.log('Order can not be canceled');
  }
}

const myOrder = new Order();

console.log(myOrder.state.name);
myOrder.cancelOrder();

myOrder.nextState();
console.log(myOrder.state.name);
myOrder.cancelOrder();

myOrder.nextState();
console.log(myOrder.state.name);
myOrder.cancelOrder();
