import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  items: any[] = [
    { active: true, title: 'CEMENT', qty: 300, price: 450 },
    { active: true, title: 'STEEL', qty: 2500, price: 45 },
    { active: true, title: 'SAND', qty: 2000, price: 55 },
    { active: true, title: 'AGREGATE', qty: 1500, price: 22 },
    { active: true, title: 'BRICKS', qty: 7, price: 20000 },
    { active: true, title: 'LABOUR', qty: 1000, price: 150 },
    { active: true, title: 'VATRIFIED TILES', qty: 600, price: 35 },
    { active: true, title: 'CEREMIC TILES', qty: 300, price: 20 },
    { active: true, title: 'GRANITE', qty: 20, price: 150 },
    { active: true, title: 'KOTA STONE', qty: 250, price: 40 },
    { active: true, title: 'DOOR FRAME', qty: 8, price: 1800 },
    { active: true, title: 'DOOR 1', qty: 5, price: 3500 },
    { active: true, title: 'DOOR 2', qty: 3, price: 2500 },
    { active: true, title: 'WINDOW GRILL', qty: 4, price: 1800 },
    { active: true, title: 'SLIDING WINDOW', qty: 4, price: 2500 },
    { active: true, title: 'WATER TANK', qty: 1000, price: 6 },
    { active: true, title: 'WALLPUTTY', qty: 4000, price: 15 },
    { active: true, title: 'PLUMBING', qty: 1, price: 30000 },
    { active: true, title: 'ELECTRIFICATION', qty: 1, price: 30000 },
    { active: true, title: 'EXCAVATION AND FILLING', qty: 1, price: 30000 },
    { active: true, title: 'CURING', qty: 1, price: 30000 },
    { active: true, title: 'EXTRA', qty: 1, price: 50000 },
  ];

  add() {
    this.items.push({ active: true, title: '', qty: 1, price: 0 });
  }

  totalPrice() {
    let totalCost = this.items
      .map((item) => {
        if (item.active) {
          return parseInt(item.qty) * parseInt(item.price);
        } else {
          return 0;
        }
      })
      .reduce((pre, curr) => {
        return pre + curr;
      });
    return totalCost;
  }
}
