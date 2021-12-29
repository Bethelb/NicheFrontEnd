import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { LandingComponent } from "./core/components/layout/landing/landing.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./user/components/auth/login/login.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "add", component: CreateEmployeeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
