import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
    <h4>Edit {{childSelectedKeg.name}}</h4>
    <label>Enter name of this beer</label>
    <input type = "text" [(ngModel)]="childSelectedKeg.name">
    <label>Enter Name of Brewery</label>
    <input type = "text" [(ngModel)]="childSelectedKeg.brand">
    <label>Enter Price of the beer</label>
    <input type = "text" [(ngModel)]="childSelectedKeg.style">
    <label>Enter the style of the beer</label>
    <input type = "float" [(ngModel)]="childSelectedKeg.price">
    <label>Enter ABV of the beer</label>
    <input type = "float" [(ngModel)]="childSelectedKeg.abv">
    <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() finishedEditingSender = new EventEmitter();

  finishedEditing() {
    this.finishedEditingSender.emit();
  }
}
