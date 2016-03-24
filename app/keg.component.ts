import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <button (click)="sellPint()" class="btn-success btn-lg add-button">Sell Pint</button>
    <label>{{ keg.brand }} {{ keg.name }}, {{ keg.alcoholContent }}% ABV, \${{ keg.price }}, {{ keg.pints }} pints left</label>
  </div>
  `
}) // does sellPint need any arguments?????
export class KegComponent {
  public keg: Keg;
  sellPint() {
    this.keg.pints -= 1;
  }
}
