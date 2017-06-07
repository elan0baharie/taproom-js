import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "beerLevel",
  pure: false
})


export class LowBeerPipe implements PipeTransform {
  transform(input: Keg[], selectedBeerLevel) {
    var output: Keg[] = [];
    if (selectedBeerLevel === "allKegs") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].pints > 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedBeerLevel === "lowBeer"){
      for (var i = 0; i <input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    }

  }
}
