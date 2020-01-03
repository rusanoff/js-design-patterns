/**
 * Template Method (шаблонный метод) - поведенческий паттерн, который определяет базовые шаги
 * исполнения алгоритма и выполнение каждого из этих шагов делегирует на соответствующие методы
 * или подклассы
 */

class Builder {
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add Tesla Engine');
  }

  installChassis() {
    console.log('Install Tesla Chassis');
  }

  addElectronic() {
    console.log('Add Tesla Electronic');
  }

  collectAccessories() {
    console.log('Collect Tesla Accessories');
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add BMW Engine');
  }

  installChassis() {
    console.log('Install BMW Chassis');
  }

  addElectronic() {
    console.log('Add BMW Electronic');
  }

  collectAccessories() {
    console.log('Collect BMW Accessories');
  }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();
bmwBuilder.build();
