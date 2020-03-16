import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Customer } from "../interfaces/customer";
import "firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class CustomersService {
  constructor(private afs: AngularFirestore) {
    this.customerCollectionRef = this.afs.collection("customers", ref =>
      ref.orderBy("lastName", "asc")
    );
  }

  customerCollectionRef: AngularFirestoreCollection<Customer>;

  add(customer: Customer) {
    this.customerCollectionRef.add(customer);
  }

  getCustomers() {
    return this.customerCollectionRef.valueChanges({
      options: { idField: "id" }
    });
  }
}
