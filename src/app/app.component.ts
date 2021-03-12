import { Component } from "@angular/core";
import { DATA } from "./data";
import { EnumColor, EnumStatus } from "./enum";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = [];

  ngOnInit() {
    this.data = DATA;
  }

  reserve(i: number) {
    if (this.data[i].code && this.data[i].color == EnumColor.DISPONIBLE) {
      this.data[i].color = EnumColor.SELECCIONADO;
      this.data[i].status = EnumStatus.SELECCIONADO;
    }
  }
}
