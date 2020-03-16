import { Component, OnInit } from "@angular/core";
import { CustomersService } from "src/app/services/customers.service";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  constructor(public customersService: CustomersService) {}

  title: string = "customers";
  description: string = "demo desc";
  icon: string = "fas fa-users";

  customers = null;

  ngOnInit(): void {
    this.customers = this.customersService.getCustomers();
  }
}
