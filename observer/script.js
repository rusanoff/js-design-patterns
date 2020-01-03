/**
 * Observer (наблюдатель) - поведенческий паттерн, который создает механизм подписки, позволяющий
 * одним объектам следить за изменениями других объектов
 */

class AutoNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(news) {
    this.news = news;
    this.notifyAll();
  }

  notifyAll() {
    this.actions.forEach((subs) => {
      subs.inform(this);
    });
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter((item) => {
      return !(item instanceof observer);
    });
  }
}

class Jack {
  inform(message) {
    console.log(`Jack has been informed about: ${message.news}`);
  }
}

class Max {
  inform(message) {
    console.log(`Max has been informed about: ${message.news}`);
  }
}

const autoNews = new AutoNews();

autoNews.register(new Jack());
autoNews.register(new Max());
autoNews.setNews('New Tesla price is $39.990');
autoNews.setNews('New Audi price is $59.999');
