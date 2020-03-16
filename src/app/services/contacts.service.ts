import { Injectable } from "@angular/core";
import { Contact } from "../interfaces/contact";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  constructor() {}

  getContacts(): Contact[] {
    return [
      {
        name: "dan cohen",
        email: "dan@mail.com",
        date: new Date(2020, 3, 5),
        phones: ["0542345920", "0542345990"]
      },
      {
        name: "ben levi",
        email: "ben@mail.com",
        date: new Date(1987, 5, 5)
      },
      {
        name: "benny bit",
        email: "benny@mail.com",
        date: new Date(1345, 8, 5),
        phones: ["0542345957"]
      }
    ];
  }
}
