import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

  constructor() { }

  products: Product[] = [new Product("chair","cushan chair","http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Old-Chair-PNG-Transparent-Image.png",[]),
  new Product("Table","Wooden Table","https://target.scene7.com/is/image/Target/15587335?wid=1560&hei=1560&fmt=pjpeg",[])];

  public getProducts() {
    return this.products;
  }
}
