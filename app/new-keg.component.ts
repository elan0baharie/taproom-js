import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
     <label>Enter the name of the beer:</label>
     <input #newTitle>
     <label>Enter the Brewery the keg is from:</label>
     <input #newBrand>
     <label>Enter price of the beer:</label>
     <input #newPrice>
     <label>Enter the ABV of the keg:</label>
     <input #newAbv>
     <button (click)="submitForm(newTitle.value, newBrand.value, newPrice.value, newAbv.value); newTitle.value=''; newBrand.value=''; newPrice.value=''; newAbv.value='';">Submit</button>
   </div>

  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(title: string, brand: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(title, brand, price, abv);
    this.newKegSender.emit(newKeg);
  }
}
