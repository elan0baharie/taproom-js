import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>What's on Tap?</h3>

    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (finishedEditingSender)="finishedEditing()"></edit-keg>

    <new-keg (newKegSender)="addKeg($event)"></new-keg>
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

  editKeg(currentKeg) {
    this.selectedKeg = currentKeg;
    console.log(this.selectedKeg);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

}
