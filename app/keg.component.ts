import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <button (click)="sellPint()" class="btn-success add-button">Sell Pint</button>
    <label>{{ keg.brand }} {{ keg.name }}, {{ keg.alcoholContent }}% ABV, \${{ keg.price }}, {{ keg.pints }} pints left</label>
    <div *ngIf="keg.pints < 10" class="lowKeg">
    <p>Less than 10 pints remaining!</p>
    </div>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  sellPint() {
    this.keg.pints -= 1;
  }
}
