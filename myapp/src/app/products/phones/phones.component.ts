import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styles: [],
})
export class PhonesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mobParts = [
    {
      id: 101,
      name: 'Jio Phone',
      inStock: 10,
      country: 'India',
      isOnline: true,
      pColor: 'red',
      price: 1500,
      desc: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.`,
    },
    {
      id: 102,
      name: 'Samsung A50+',
      inStock: 0,
      country: 'South Korea',
      isOnline: false,
      pColor: 'blue',
      price: 1500,
      desc: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.`,
    },
    {
      id: 103,
      name: 'Iphone 5',
      inStock: 15,
      country: 'USA',
      isOnline: true,
      pColor: 'green',
      price: 1500,
      desc: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.`,
    },
  ];
}
