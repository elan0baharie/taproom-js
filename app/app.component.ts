import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <tap-header></tap-header>
    <h1>Tap Room</h1>
    <h3>What's on Tap?</h3>

    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (pourSender)="pour($event)" (pourGrowlerSender)="pourGrowler($event)" (pourLargeGrowlerSender)="pourLargeGrowler($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (finishedEditingSender)="finishedEditing()"></edit-keg>

    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {

  masterKegList: Keg[] = [
    new Keg('Brune', 'Westmalle', 'ale', 6, 7),

    new Keg('Tremens', 'Delirium', 'ale', 5, 8.5),

    new Keg('African Amber', 'Mac & Jacks', 'ale', 5, 5.2),

    new Keg('Blueberry Kambucha', 'Mystique', 'kambucha', 5, 7.2),

    new Keg('Mischief Maker', 'Schilling', 'cider', 4, 5),

    new Keg('Dystopian State', 'Entropy', 'ale', 7, 10.5),

    new Keg('Bellingham Blonde', 'Boundary Bay', 'beer', 5, 5.1),

    new Keg('Goose IPA', 'Goose Island', 'ale', 6, 5.9),

    new Keg('Old Chub Nitro', 'Oskar Blues', 'ale', 6, 6.9)
  ];
  selectedKeg = null;

  pour(currentKeg) {
    var pintsPresale = currentKeg.pints;
    var pintsPostsale = pintsPresale - 1;
    currentKeg.pints = pintsPostsale;
  }

  pourGrowler(currentKeg) {
    var pintsPresale = currentKeg.pints;
    var pintsPostsale = pintsPresale - 2;
    currentKeg.pints = pintsPostsale;
  }

  pourLargeGrowler(currentKeg) {
    var pintsPresale = currentKeg.pints;
    var pintsPostsale = pintsPresale - 4;
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
