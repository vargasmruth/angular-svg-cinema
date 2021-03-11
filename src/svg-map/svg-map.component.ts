import { Component, OnInit } from '@angular/core';
import { DATA } from './data';
import { EnumColor } from './enum';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent implements OnInit {
data = [];

  ngOnInit() {
    this.data = DATA;
  }

  changeColor(i: number) {
    if (this.data[i].code && this.data[i].color == EnumColor.DISPONIBLE) {
      this.data[i].color = EnumColor.SELECCIONADO;
    }
  }

}