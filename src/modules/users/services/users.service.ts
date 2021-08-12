import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "http://localhost:8080/service/user/"

  constructor(private httpClient: HttpClient) { }

  public createUser(user: any): Observable<any> {
    return this.httpClient.post(this.url, user);
  }

  public getAllUsers(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getUserById(id: number) {
    return this.httpClient.get(this.url+id);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.url+id);
  }

  public editUser(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.url+id, user);
  }
}
