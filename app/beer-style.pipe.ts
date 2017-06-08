import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe ({
  name: 'beerStyle',
  pure: false
})

export class StylePipe implements PipeTransform {
  transform(input: Keg[], style) {
    var output: Keg[] = [];
    if (style === "ale") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].style === "ale") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (style === "beer"){
      for (var i = 0; i <input.length; i++) {
        if (input[i].style === "beer") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (style === "cider"){
      for (var i = 0; i <input.length; i++) {
        if (input[i].style === "cider") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (style === "kambucha"){
      for (var i = 0; i <input.length; i++) {
        if (input[i].style === "kambucha") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
