import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "pints",
  pure: false
})
export class PintsPipe implements PipeTransform {
  transform(input: Keg[], args){
    var plentyOfPints = args[0];
    if(plentyOfPints === "lessThan10"){
      return input.filter((keg) => {
      return (keg.pints <= 122);
      });
    } else {
      return input;
    }
  }
}
