import { UserModule } from "./user/user.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateEmployeeComponent } from "./employee/create-employee/create-employee.component";
import { EmployeeDetailsComponent } from "./employee/employee-details/employee-details.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./core/components/layout/footer/footer.component";
import { HeaderComponent } from "./core/components/layout/header/header.component";
import { LandingComponent } from "./core/components/layout/landing/landing.component";
import { CardComponent } from "./core/components/layout/card/card.component";
import { AboutusComponent } from "./core/components/layout/aboutus/aboutus.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    CardComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
