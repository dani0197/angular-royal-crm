import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { AppRoutingModule } from "./app-routing.module";
import { CustomersComponent } from "./components/customers/customers.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PageHeaderComponent } from "./utils/page-header/page-header.component";
import { CleanNamePipe } from "./pipes/clean-name.pipe";
import { NewCustomerComponent } from "./components/new-customer/new-customer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    CustomersComponent,
    ContactsComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    CleanNamePipe,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
