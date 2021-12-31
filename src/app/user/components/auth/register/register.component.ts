import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService) {}

  ngOnInit() {}

  registerUser() {
    this.userService.createUser(this.user).subscribe(
      (data) => console.log(`User registration data submitted`),
      (error) => console.log(error)
    );
    this.user = new User();
  }
}
