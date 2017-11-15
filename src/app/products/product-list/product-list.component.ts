import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'sc-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
  // outside from the product-list component. 
  // here we list all the products, while clicking on the list we show that product in the product-list component.
  // so this component gives input to that component from outside.
  // products: Product[] = [new Product("chair","cushan chair","http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Old-Chair-PNG-Transparent-Image.png",[]),
  // new Product("Table","Wooden Table","https://target.scene7.com/is/image/Target/15587335?wid=1560&hei=1560&fmt=pjpeg",[])];
  @Output() productSelected = new EventEmitter<Product>();
  // product = new Product('Dummy','Dummy','http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Old-Chair-PNG-Transparent-Image.png');
  constructor(private productService:ProductService) { }
  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  

  onSelectProduct(selectedProduct : Product) {
    this.productSelected.emit(selectedProduct);
  }

}
