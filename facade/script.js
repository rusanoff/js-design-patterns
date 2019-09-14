/**
 * Facade (фасад) - прячет большую и непонятную реализацию со сложной логикой внутри себя и выдает наружу
 * понятный интерфейс
 */

// Класс со сложной логикой
class Conveyor {
  setBody() {
    console.log('Body set!');
  }

  getEngine() {
    console.log('Dismantle Engine!');
  }

  setEngine() {
    console.log('Engine set!');
  }

  setInterior() {
    console.log('Interior added!');
  }

  changeInterior() {
    console.log('Update interior!');
  }

  setExterior() {
    console.log('Added exterior!');
  }

  setWheels() {
    console.log('Wheels!');
  }

  addElectronics() {
    console.log('Added electronics!');
  }

  paint() {
    console.log('Car painted!');
  }
}

// Фасад
class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior() {
    this.car.setInterior();
    this.car.changeInterior();
  }
}

const conveyor = new Conveyor();
const conveyorFacade = new ConveyorFacade(conveyor);

conveyorFacade.assembleCar(); /*
  Body set!
  Engine set!
  Interior added!
  Added exterior!
  Wheels!
  Added electronics!
  Car painted!
*/
conveyorFacade.changeEngine(); /*
  Dismantle Engine!
  Engine set!
*/
conveyorFacade.changeInterior(); /*
  Interior added!
  Update interior!
*/
