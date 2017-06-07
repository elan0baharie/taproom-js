import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>What's on Tap?</h3>

    <keg-list [childKegList]="masterKegList"></keg-list>

    <hr>
    <div *ngIf="selectedKeg">
      <h4>Edit {{selectedKeg.name}}</h4>
      <label>Enter name of this beer</label>
      <input type = "text" [(ngModel)]="selectedKeg.name">
      <label>Enter Name of Brewery</label>
      <input type = "text" [(ngModel)]="selectedKeg.brand">
      <label>Enter Price of the beer</label>
      <input type = "float" [(ngModel)]="selectedKeg.price">
      <label>Enter ABV of the beer</label>
      <input type = "float" [(ngModel)]="selectedKeg.abv">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {

  masterKegList: Keg[] = [
    new Keg('Brune', 'Westmalle', 6, 7),

    new Keg('Tremens', 'Delirium', 5, 8.5),

    new Keg('African Amber', 'Mac & Jacks', 5, 5.2),

    new Keg('Blueberry Kambucha', 'Mystique', 5, 7.2),

    new Keg('Mischief Maker', 'Schilling', 4, 5),

    new Keg('Dystopian State', 'Entropy', 7, 10.5),

    new Keg('Bellingham Blonde', 'Boundary Bay', 5, 5.1),

    new Keg('Goose IPA', 'Goose Island', 6, 5.9),

    new Keg('Old Chub Nitro', 'Oskar Blues', 6, 6.9)
  ];
  selectedKeg = null;

  pour(currentKeg) {
    var pintsPresale = currentKeg.pints;
    var pintsPostsale = pintsPresale - 1;
    currentKeg.pints = pintsPostsale;
  }

  edit(currentKeg) {
    this.selectedKeg = currentKeg;
    console.log(this.selectedKeg);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

}
