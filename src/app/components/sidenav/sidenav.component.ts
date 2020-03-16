import { Component, OnInit } from "@angular/core";

interface navItem {
  title: string;
  icon: string;
  link?: string;
}

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  navItems: Array<navItem> = [
    { title: "customers", icon: "fas fa-users", link: "/customers" },
    { title: "contacts", icon: "fas fa-address-book", link: "/contacts" },
    { title: "leads", icon: "fas fa-hand-point-up", link: "/leads" },
    { title: "reports", icon: "fas fa-users", link: "/reports" },
    {
      title: "Integrations",
      icon: "fab fa-stack-exchange",
      link: "/integrations"
    },
    {
      title: "year-end sale",
      icon: "fas fa-glass-cheers",
      link: "/year-end-sale"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
