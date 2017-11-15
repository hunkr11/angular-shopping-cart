import { Component, OnInit } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'sc-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  constructor() { }

 
  // this selectedProduct property can not passed to the <sc-product-detail> component as property Binding
  selectedProduct: Product;

}
