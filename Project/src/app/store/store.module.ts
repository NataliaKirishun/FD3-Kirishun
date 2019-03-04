import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";
import {CartSummaryComponents} from "./cart-summary/cartSummary.components"
import {StoreHeaderComponent} from "./store-header/storeHeader.component"
import {CartDetailComponent} from "./cart-detail/cartDetail.component"
import {CheckoutComponent} from "./checkout/checkout.component"
import {RouterModule} from "@angular/router"


@NgModule({
  imports:[ModelModule,BrowserModule, RouterModule,FormsModule],
  declarations: [StoreComponent, CartSummaryComponents, StoreHeaderComponent, CartDetailComponent, CheckoutComponent],
  exports:[StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule{}
// @NgModel настраивает модуль
// imports используется для передачи Angular информации о том, что модуль магазина зависит о модуля
// модели, BrowserModule, FormsModule содерж-х стандартные функции Angular для веб-приложений и работы
// с элементами форм
//declarations для передачи Angular информации о клмпоненте StoreComponent, который как сообщает
//exports мшэет использоваться другими частями приложения.
