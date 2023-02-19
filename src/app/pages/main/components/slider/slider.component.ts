import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  mousePos = [`0`, `0`];

  constructor() {}

  ngOnInit(): void {}

  mousePosition(e: MouseEvent) {
    this.mousePos = [`calc(${e.screenX}px - 40vw)`, `calc(${e.screenY}px - 50vw)`];
  }

  getMousePosition () {
    return this.mousePos;
  }
}
