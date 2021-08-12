import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  
  private url = "http://localhost:8080/service/branch/"

  constructor(private httpClient: HttpClient) { }

  public createBranch(user: any): Observable<any> {
    return this.httpClient.post(this.url, user);
  }

  public getAllBranches(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getBranchById(id: number) {
    return this.httpClient.get(this.url+id);
  }

  public deleteBranch(id: number): Observable<any> {
    return this.httpClient.delete(this.url+id);
  }

  public editBranch(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.url+id, user);
  }
}
