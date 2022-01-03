// source: https://www.positronx.io/angular-jwt-user-authentication-tutorial/
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { JwtRequest } from "../models/jwt-request";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  baseUrl: string = "/api";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) {}

  signUp(user: User): Observable<any> {
    let api = `${this.baseUrl}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  login(jwtRequest: JwtRequest) {
    return this.http
      .post<any>(`${this.baseUrl}/authenticate`, jwtRequest)
      .subscribe((res: any) => {
        localStorage.setItem("id_token", res.token);
        this.router.navigateByUrl("/");
      });
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem("id_token");
    return authToken !== null ? true : false;
  }

  logout() {
    let removeToken = localStorage.removeItem("id_token");
    if (removeToken == null) {
      this.router.navigateByUrl("/");
    }
  }

  getUserProfile(username): Observable<any> {
    let api = `${this.baseUrl}/${username}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
