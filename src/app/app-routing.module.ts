import { CreateServiceRequestComponent } from "./service-request/create-service-request/create-service-request.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServiceRequestListComponent } from "./service-request/service-request-list/service-request-list.component";
import { LandingComponent } from "./core/components/layout/landing/landing.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "service-requests", component: ServiceRequestListComponent },
  { path: "create-service-request", component: CreateServiceRequestComponent },
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
