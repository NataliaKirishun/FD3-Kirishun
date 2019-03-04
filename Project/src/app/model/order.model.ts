import {Injectable} from "@angular/core";
import {Cart} from "./cart.model";

@Injectable()
export class Order {
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public region: string;
  public postcode: string;
  public country: string;
  public shipped: boolean =false;

  constructor(public cart: Cart){

  }

  clear(){
    this.id = null;
    this.name = null;
    this.address = null;
    this.city = null;
    this.region = null;
    this.postcode = null;
    this.country = null;
    this.shipped = null;
    this.cart.clear();
  }
}
