class User {
  constructor(name, subscriptions, base = [], base2 = []) {
    this.name = name;
    this.subscriptions = subscriptions;
    this.base = base;
    this.base2 = base2;
  }

  subscribe(streamingService) {
    if (this.base2.length) {
      for (let i = 0; i < this.base2.length; i++) {
        if (this.base2[i] !== streamingService.streamingService) {
          this.base.push(streamingService);
          this.base2.push(streamingService.streamingService);
        }

        console.log(this.base2[i]);
      }
    }

    if (!this.base2.length) {
      this.base.push(streamingService);
      this.base2.push(streamingService.streamingService);
    }

    console.log(`User ${this.name} is subscribed to`, streamingService);

    //for (let i =0, )

    //this.base.push(streamingService);
    //this.base2.push(streamingService.streamingService);

    //console.log(this.base);

    // for (let i = 0; i < this.base.length; i++) {
    //   console.log(this.base[i]);
    // }

    //for (let i = 0; i < this.base.length; i++) {

    // if (streamingService.streamingService !== this.base.subscriptions) {
    //   // console.log('hello');
    //   this.base.push(streamingService);
    // }
    // //}

    let otherVar = new Subscription(streamingService);
    return otherVar;
  }
}

class Subscription {
  constructor(streamingService) {
    this.streamingService = streamingService;
  }

  watch(name) {
    console.log(
      'Subscription on streaming service is active and you are using',
      name
    );
    // console.log(name);
  }
  getStreamingService() {
    return this.streamingService;
  }
  getRecomendationTrending() {}

  getRecomendationByGenre(genre) {
    //console.log(genre);
  }
}

class StreamingService {
  constructor(name, shows) {
    this.name = name;
    this.shows = shows;
  }

  viewsByShowNames() {}

  addShow(show) {}

  getMostViewedShowsOfYear(year) {}
  getMostViewedShowsOfGenre(genre) {
    console.log(
      'The name of the most viedw show  most viewed type of genre is',
      genre
    );
  }
}

class Show {
  constructor(name, genre, releaseDate) {
    this.name = name;
    this.genre = genre;
    this.releaseDate = releaseDate;
  }
  getDuratin() {}
}

class Movie extends Show {
  constructor(name, genre, releaseDate) {
    super(name, genre, releaseDate);
  }
}

class Episode extends Show {
  constructor(name, genre, releaseDate) {
    super(name, genre, releaseDate);
  }
}

class Series extends Show {
  constructor(name, genre, releaseDate) {
    super(name, genre, releaseDate);
  }
}

let user1 = new User('Max', 'TV serial');

let subs = new Subscription('Roku');
let subs2 = new Subscription('Another');
let subs3 = new Subscription('Film3');
user1.subscribe(subs);
user1.subscribe(subs2);
user1.subscribe(subs3);
user1.subscribe(subs);
// let c = subs.getStreamingService();
// console.log(c);

let strserv = new StreamingService('Cool service');

subs.watch(strserv);

let show1 = new Show('About all peple', 'comic', 2021);

strserv.getMostViewedShowsOfGenre(show1);
