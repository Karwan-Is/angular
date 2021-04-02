import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get("http://localhost:4008/users")
  }

  addUser(user) {
    return this.httpClient.post("http://localhost:4008/users", user)
  }
}
