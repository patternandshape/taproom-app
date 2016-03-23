import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
    <h3>Name: </h3>
    <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-name-form"/>
    <h3>Brand: </h3>
    <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-name-form"/>
    <h3>Alcohol Content: </h3>
    <input [(ngModel)]="keg.alcoholContent" class="col-sm-8 input-lg keg-name-form"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
