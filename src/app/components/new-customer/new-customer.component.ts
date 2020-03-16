import { Component, OnInit } from "@angular/core";
import { CustomersService } from "src/app/services/customers.service";
import { Customer } from "src/app/interfaces/customer";

@Component({
  selector: "app-new-customer",
  templateUrl: "./new-customer.component.html",
  styleUrls: ["./new-customer.component.scss"]
})
export class NewCustomerComponent implements OnInit {
  title: string = "new customer";
  description: string = "Add new customer";
  icon: string = "fas fa-plus-circle";

  firstName = "";
  lastName = "";
  phone = "";
  email = "";
  address = "";
  notes = "";

  constructor(private customerService: CustomersService) {}

  onSubmit({ valid, value }: { valid: boolean; value: Customer }) {
    if (valid) {
      this.customerService.add(value);
    }
  }

  ngOnInit(): void {}
}
