import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor (private httpClient: HttpClient) {}

  getUsers(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

}
