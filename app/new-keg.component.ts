import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Create Keg: </h3>
  <input placeholder="Name" class="col-sm-8 input-lg" #newName>
  <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
  <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAlcoholContent>
  <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
  <button (click)="addKeg(newName, newBrand, newAlcoholContent, newPrice)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(kegName: HTMLInputElement, kegBrand: HTMLInputElement, kegAlcoholContent: HTMLInputElement, kegPrice: HTMLInputElement){
    var newKeg = new Keg(kegName.value,kegBrand.value, parseInt(kegAlcoholContent.value), parseInt(kegPrice.value));
    this.onSubmitNewKeg.emit(newKeg);
  }
}
