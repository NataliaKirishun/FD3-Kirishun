import {Injectable} from "@angular/core"
import {Observable} from "rxjs/index"
import { HttpClient} from '@angular/common/http'
import {Product} from "./product.model"
import {Order} from "./order.model"
import { map } from 'rxjs/operators'

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource{

  baseUrl:string;

  constructor(private http: HttpClient){
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

}
