import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  mousePos = [`-83vw`, `-100vw`];

  constructor() {}

  ngOnInit(): void {}

  mousePosition(e: MouseEvent) {
    this.mousePos = [`calc(${e.screenX}px - 132vw)`, `calc(${e.screenY}px - 138vw)`];
  }

  getMousePosition () {
    return this.mousePos;
  }
}
