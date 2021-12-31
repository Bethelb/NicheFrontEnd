import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  baseUrl: string = "/api";

  constructor(private http: HttpClient) {}

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  loginUser(jwtRequest: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/authenticate`, jwtRequest);
  }
}
