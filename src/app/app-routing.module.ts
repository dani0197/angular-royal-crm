import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { NewCustomerComponent } from "./components/new-customer/new-customer.component";

const routes: Routes = [
  { path: "", redirectTo: "customers", pathMatch: "full" },
  { path: "contacts", component: ContactsComponent },
  { path: "customers", component: CustomersComponent },
  { path: "customers/new", component: NewCustomerComponent },
  { path: "PageNotFound", component: PageNotFoundComponent },
  { path: "**", redirectTo: "PageNotFound", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
