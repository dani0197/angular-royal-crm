import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"]
})
export class PageHeaderComponent implements OnInit {
  @Input() icon: string = "";
  @Input() title: string = "";
  @Input() description: string = "";

  @Output() clicked = new EventEmitter<any>();

  constructor() {}

  emitClick() {
    this.clicked.emit(console.log("button clicked!"));
  }

  ngOnInit(): void {}
}
