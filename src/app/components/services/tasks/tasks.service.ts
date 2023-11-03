import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = "https://app.microenv.com/backend/key/7442268a44b41e57f64ce2/rest/api/tasks/"

  constructor(private httpClient: HttpClient) { }

  public getTasks() : Observable<any> {
    return this.httpClient.get(this.getUrl())
    .pipe(map((response : Response) => response));
  }

  private getUrl() {
    return `${this.baseUrl}`;
  }
}
