/**
 * Proxy (заместитель) - предоставляет вместо реальных объектов специальные объекты-заменители, которые перехватывают
 * вызов к оригиналам и позволяют сделать что-то до или после обращения к оригинальному объекту
 */

// Оригинальный класс для открытия дверей автомобиля
class CarAccess {
  open() {
    console.log('Opening car door')
  }

  close() {
    console.log('Closing the car door')
  }
}

// Класс, обеспечивающий безопасность открытия дверей
class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  authenticate(password) {
    return password === 'Ilon';
  }

  close() {
    this.door.close()
  }
}

const door = new SecuritySystem(new CarAccess());

door.open('Andrew'); // Access denied!
door.open('Ilon'); // Opening car door
door.close(); // Closing the car door
