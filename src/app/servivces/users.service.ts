import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   url ="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  public getusers() : Observable<Iuser[]> {
      return this.http.get<Iuser[]>(this.url);
  }
}
