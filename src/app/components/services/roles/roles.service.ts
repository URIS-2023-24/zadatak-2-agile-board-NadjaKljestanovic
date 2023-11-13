import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl = "https://app.microenv.com/backend/key/6d4e7398ab4f925b208324/rest/api/roles/"

  private getUrl(){
    return `${this.baseUrl}`;
  }

  constructor(private httpClient: HttpClient) { }

  public getRoles() : Observable<any> {
    return this.httpClient.get(this.getUrl())
    .pipe(map((response: Response) => response));
  }
}
