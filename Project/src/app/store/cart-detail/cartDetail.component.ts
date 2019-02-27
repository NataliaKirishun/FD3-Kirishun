import {Component} from "@angular/core";
import {Cart} from "../../model/cart.model";

@Component({
  templateUrl:"./cartDetail.component.html",
  styleUrls: ["./cartDetail.component.less"]
})
export class CartDetailComponent{
  constructor(public cart: Cart){

  }
}
