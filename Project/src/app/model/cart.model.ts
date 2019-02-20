import {Injectable} from "@angular/core";
import {Product} from "./product.model";

@Injectable()
export class Cart{
  public lines: CartLine[] = [];
  public itemCount: number = 1;
  public cartPrice: number = 0;
};

export class CartLine {

  constructor( public product: Product, public qauntity: number ){}


}
