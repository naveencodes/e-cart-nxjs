import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface}  from '../interface/genric';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  productsApi = "https://fakestoreapi.com/products";
  // posts!: PostInterface;
  constructor(private http:HttpClient) { }
  getProductsData(): Observable<any> {
    return this.http.get(this.productsApi);
  }
  getPosts(): Observable<any> {
    return this.http.get(this.productsApi);
  }
}
