import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList">{{currentKeg.name}} by {{currentKeg.brand}} price is $ {{currentKeg.price}} abv {{currentKeg.abv}}% <button class="click btn btn-default"  (click)="edit(currentKeg)">Edit</button><button class="btn btn-default" (click)="pour(currentKeg)">Pour</button> {{currentKeg.pints}}</li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
