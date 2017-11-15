import { ProductType } from "../shared/product-type";

export class Product {
    constructor(public name, public description,public imagePath,public productType:ProductType[]){}

  
}
