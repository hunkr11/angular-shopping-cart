import { Component, OnInit } from '@angular/core';
import { ProductType } from '../shared/product-type';

@Component({
  selector: 'sc-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {

  private items:ProductType[];
  constructor() { }


}
