import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'sc-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  @Input() selectededProduct: Product;


  
}
