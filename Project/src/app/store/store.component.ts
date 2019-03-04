import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";


@Component({
  selector: "store",
  templateUrl:"./store.component.html",
  styleUrls:['./store.component.less']
})
export class StoreComponent {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(
    private repository:ProductRepository,
    private cart: Cart,
    private router: Router){
  }

  get products():Product[]{
    let index = (this.selectedPage - 1)*this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory).slice(index, index + this.productsPerPage);
  }

  get categories():string[]{
    return this.repository.getCategories();
  }

  changeCategory(newCategory?:string):void{
    this.selectedCategory = newCategory;
  }

  changePage(newPage:number):void {
    this.selectedPage = newPage;
  }

  changePageSize (newSize: number):void {
    this.productsPerPage=Number(newSize);
    this.selectedPage = 1;
  }

  get pageNumbers():number[]{
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage))
      .fill(0)
      .map((x,i)=>i+1)
  }

  addProductToCart(product:Product){
      this.cart.addLine(product);
      this.router.navigateByUrl("/cart");
  }
}
