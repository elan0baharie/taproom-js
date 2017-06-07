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
    <li *ngFor="let currentKeg of childKegList | beerLevel:filterByBeerLevel">{{currentKeg.name}} by {{currentKeg.brand}} price is $ {{currentKeg.price}} abv {{currentKeg.abv}}%
     <button class="click btn btn-success"  (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
     <button class="btn btn-default" (click)="pour(currentKeg)">Pour</button> {{currentKeg.pints}}</li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pourSender = new EventEmitter();

  filterByBeerLevel: string = "allKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pour(currentKeg: Keg) {
    this.pourSender.emit(currentKeg);
  }

  onChange(beerLevel) {
    this.filterByBeerLevel = beerLevel;
  }
}
