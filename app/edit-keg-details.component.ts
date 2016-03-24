import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
    <h4>Name: </h4>
    <input [(ngModel)]="keg.name" class="input-sm keg-name-form"/>
    <h4>Brand: </h4>
    <input [(ngModel)]="keg.brand" class="input-sm keg-name-form"/>
    <h4>Alcohol Content: </h4>
    <input [(ngModel)]="keg.alcoholContent" class="input-sm keg-name-form"/>
    <h4>Price: </h4>
    <input [(ngModel)]="keg.price" class="input-sm keg-name-form"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
