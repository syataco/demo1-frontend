import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "http://localhost:8080/service/product/"

  constructor(private httpClient: HttpClient) { }

  public createProduct(user: any): Observable<any> {
    return this.httpClient.post(this.url, user);
  }

  public getAllProducts(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getProductById(id: number) {
    return this.httpClient.get(this.url+id);
  }

  public deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(this.url+id);
  }

  public editProduct(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.url+id, user);
  }
}
