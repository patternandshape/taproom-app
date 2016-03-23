import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'new-task',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Create Keg: </h3>
  <input placeholder="Name" class="col-sm-8 input-lg" #newName>
  <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
  <input placeholder="AlcoholContent" class="col-sm-8 input-lg" #newAlcoholContent>
  <button (click)="addKeg(newName, newBrand, newAlcoholContent)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addKeg(kegName: HTMLInputElement, kegBrand: HTMLInputElement, kegAlcoholContent: HTMLInputElement){
    var newKeg = new Keg(kegName.value,kegBrand.value, parseInt(kegAlcoholContent.value));
    this.onSubmitNewKeg.emit(newKeg);
  }
}
