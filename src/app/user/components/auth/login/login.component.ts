import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JwtRequest } from "src/app/models/jwt-request";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  jwtRequest: JwtRequest = new JwtRequest();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    console.log(this.jwtRequest);
    this.authService.login(this.jwtRequest);
    this.jwtRequest = new JwtRequest();
  }
}
