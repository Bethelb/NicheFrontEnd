import { CreateEmployeeComponent } from "./employee/create-employee/create-employee.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { LandingComponent } from "./core/components/layout/landing/landing.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "add", component: CreateEmployeeComponent },
  {
    path: "auth",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
