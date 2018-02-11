import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Wolverine' },
      { id: 12, name: 'Natasha Romanova' },
      { id: 13, name: 'Wanda Maximova' },
      { id: 14, name: 'Elektra' },
      { id: 15, name: 'Sue Storm' },
      { id: 16, name: 'Hulk' },
      { id: 17, name: 'Thor Odinson' },
      { id: 18, name: 'Motoko Kusanagi' },
      { id: 19, name: 'Naruto Uzumaki' },
      { id: 20, name: 'Hinata Hyuga' }
    ];

    return { heroes };
  }

  constructor() { }

}
