import {Component} from "@angular/core";
import {Cart} from "../../model/cart.model";

@Component({
  selector:"cart-summary",
  templateUrl: "./cartSummary.component.html",
  styleUrls: ['./cartSummary.component.less'],
})
export class CartSummaryComponents {

  constructor(public cart: Cart){}
}
