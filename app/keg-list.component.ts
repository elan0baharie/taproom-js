import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">Full Kegs</option>
    <option value="lowBeer" >Low Beer</option>
  </select>
  <ul>
    <li *ngFor="let currentKeg of childKegList | beerLevel:filterByBeerLevel">{{currentKeg.name}} by {{currentKeg.brand}} price is <span [class]="priceColor(currentKeg)">$ {{currentKeg.price}} </span> abv <span [class]="abvColor(currentKeg)">{{currentKeg.abv}}%</span>
     <button class="click btn btn-success"  (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
     <button class="btn btn-default" (click)="pour(currentKeg)">Pint</button> <button class="btn btn-default" (click)="pourGrowler(currentKeg)">Growler</button> <button class="btn btn-default" (click)="pourLargeGrowler(currentKeg)">Large Growler</button> {{currentKeg.pints}}</li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pourSender = new EventEmitter();
  @Output() pourGrowlerSender = new EventEmitter();
  @Output() pourLargeGrowlerSender = new EventEmitter();

  filterByBeerLevel: string = "allKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  priceColor(currentKeg) {
    if (currentKeg.price < 6) {
      return "priceRegular";
    } else {
      return "pricePremium";
    }
  }

  abvColor(currentKeg) {
    if (currentKeg.abv < 6) {
      return "abvBoring";
    } else {
      return "abvBlackout";
    }
  }

  pour(currentKeg: Keg) {
    this.pourSender.emit(currentKeg);
  }

  pourGrowler(currentKeg: Keg) {
    this.pourGrowlerSender.emit(currentKeg);
  }

  pourLargeGrowler(currentKeg: Keg) {
    this.pourLargeGrowlerSender.emit(currentKeg);
  }


  onChange(beerLevel) {
    this.filterByBeerLevel = beerLevel;
  }
}
