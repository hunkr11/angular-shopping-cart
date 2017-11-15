import { Component, Input } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'sc-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent {
  // property binding
  // please give me the product from outside
@Input() product: Product;
productId: number;
  

}
