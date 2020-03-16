import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../../interfaces/contact";
import { ContactsService } from "src/app/services/contacts.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  constructor(public contactsService: ContactsService) {}

  // usersData = [];

  title: string = "contacts";
  description: string = "demo description";
  icon: string = "fas fa-address-book";
  contacts: Contact[] = [];

  ngOnInit(): void {
    // const usersObs = this.http.get<any[]>(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // usersObs.subscribe(data => (this.usersData = data));
    this.contacts = this.contactsService.getContacts();
  }

  emitClick(event) {
    this.emitClick = event;
  }
}
