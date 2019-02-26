import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "./store/store.module";
import {StoreComponent} from "./store/store.component";
import {CheckoutComponent} from "./store/checkout/checkout.component";
import {CartDetailComponent} from "./store/cart-detail/cartDetail.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    RouterModule.forRoot([
      { path:"store", component: StoreComponent},
      { path:"cart", component: CartDetailComponent},
      { path:"checkout", component: CheckoutComponent},
      { path:"**", redirectTo: "/store"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
