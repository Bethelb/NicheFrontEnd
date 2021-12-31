import { Component, OnInit } from "@angular/core";
import { JwtRequest } from "src/app/models/jwt-request";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  jwtRequest: JwtRequest = new JwtRequest();

  constructor(private userService: UserService) {}

  ngOnInit() {}

  login() {
    this.userService.loginUser(this.jwtRequest).subscribe(
      (data) => console.log("Logging in..."),
      (error) => console.log(error)
    );
    this.jwtRequest = new JwtRequest();
  }
}
