import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h4>Create Keg: </h4>
    <input placeholder="Name" class="input-sm" #newName>
    <input placeholder="Brand" class="input-sm" #newBrand>
    <input placeholder="Alcohol Content" class="input-sm" #newAlcoholContent>
    <input placeholder="Price" class="input-sm" #newPrice>
    <button (click)="addKeg(newName, newBrand, newAlcoholContent, newPrice)" class="create btn-success btn-sm add-button">Add</button>
    <div *ngIf="keg.pints < 10" class="lowKeg">
    <h5>Less than 10 pints remaining!</h5>
    </div>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter < Keg > ;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(kegName: HTMLInputElement, kegBrand: HTMLInputElement, kegAlcoholContent: HTMLInputElement, kegPrice: HTMLInputElement) {
    var newKeg = new Keg(kegName.value, kegBrand.value, parseInt(kegAlcoholContent.value), parseInt(kegPrice.value));
    this.onSubmitNewKeg.emit(newKeg);
    console.log(newKeg);
    kegName.value = "";
    kegBrand.value = "";
    kegAlcoholContent.value = "";
    kegPrice.value = "";


  }
}
