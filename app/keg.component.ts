import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <button (click)="sellPint()" class="btn-success btn-lg add-button">Sell Pint</button>
    <label>{{ keg.name }}</label>
  </div>
  `
}) // does sellPint need any arguments?????
export class KegComponent {
  public keg: Keg;
  sellPint(setPints: number) {
    this.keg.pints = setPints;
  }
}
