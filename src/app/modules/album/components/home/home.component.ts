import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style
} from '@angular/animations';

import * as faker from 'faker';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'nx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInUp', [

      state('void', style({
        transform: 'translateY(10%)',
        opacity: 0
      })),

      transition(':enter, :leave', [ // void <=> *
        animate('350ms 0ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  songs: any[] = [];
  similarSongs: any[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.songs.push({
        title: faker.lorem.words(),
        artist: faker.fake('{{name.firstName}} {{name.lastName}}'),
        poster: faker.image.image()
      });
      this.similarSongs.push({
        title: faker.lorem.words(),
        artist: faker.fake('{{name.firstName}} {{name.lastName}}'),
        poster: faker.image.image()
      });
    }
  }

}
