import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: `./books.component.html`,
  styles: [],
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mobParts = [
    {
      id: 201,
      name: 'Believe In Yourself',
      inStock: 10,
      author: 'Dr. Murphy',
      isOnline: true,
      pColor: 'red',
      price: 200,
      desc: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.`,
    },
    {
      id: 202,
      name: 'Wing Of Fire',
      inStock: 10,
      author: 'A. P. J. Abdul Kalam',
      isOnline: true,
      pColor: 'blue',
      price: 300,
      desc: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.`,
    },
    {
      id: 203,
      name: 'Revolution 2020',
      inStock: 15,
      author: 'Chetan Bhagat',
      isOnline: true,
      pColor: 'green',
      price: 250,
      desc: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.`,
    },
  ];
}
