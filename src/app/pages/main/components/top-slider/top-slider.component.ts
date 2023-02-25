import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const DOTS_H = 10;
const DOTS_V = 5;
const RANDOMIZE = 0.85;

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss']
})

export class TopSliderComponent implements OnInit, AfterViewChecked {

  sliderSize = [0, 0];
  dotsArray!: number[][][];
  trianglesArray!: string[][];

  @ViewChild('top_slider')
  topSlider?: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(DOTS_H);
  }

  ngAfterViewChecked(): void {
    if (this.topSlider) {
      this.sliderSize = [this.topSlider.nativeElement.offsetWidth, this.topSlider.nativeElement.offsetHeight];
      let dotsY = this.rotate(new Array(DOTS_H).fill('').map(() => this.dotsGen(DOTS_V)));
      this.dotsArray = new Array(DOTS_V).fill('').map((_, indexY) => this.dotsGen(DOTS_H).map((el, indexX) => {
        return [el, dotsY[indexY][indexX]]
      }))
      this.trianglesArray = this.dotsArray.reduce((acc: string[][], el, index) => {
        return acc.concat([el.reduce((a, e, i) => {
          let midPoint = i < el.length - 1 && index < this.dotsArray.length - 1 ? [
              ((e[0] + el[i+1][0] + this.dotsArray[index+1][i][0] + this.dotsArray[index+1][i+1][0]) / 4),
              ((e[1] + el[i+1][1] + this.dotsArray[index+1][i][1] + this.dotsArray[index+1][i+1][1]) / 4)
            ] : [0];
          return a += i < el.length - 1 && index < this.dotsArray.length - 1
            ? `${e[0]}px ${e[1]}px, ${el[i+1][0]}px ${el[i+1][1]}px, ${midPoint[0]}px ${midPoint[1]}px;
              ${this.dotsArray[index+1][i][0]}px ${this.dotsArray[index+1][i][1]}px, ${this.dotsArray[index+1][i+1][0]}px ${this.dotsArray[index+1][i+1][1]}px, ${midPoint[0]}px ${midPoint[1]}px;
              ${e[0]}px ${e[1]}px, ${this.dotsArray[index+1][i][0]}px ${this.dotsArray[index+1][i][1]}px, ${midPoint[0]}px ${midPoint[1]}px;
              ${el[i+1][0]}px ${el[i+1][1]}px, ${this.dotsArray[index+1][i+1][0]}px ${this.dotsArray[index+1][i+1][1]}px, ${midPoint[0]}px ${midPoint[1]}px;`
            : ''
        }, '').slice(0, -1).split(';')])
      }, []).slice(0, -1);
    }
  }

  dotsGen(len: number) {
    let mainLength = len === DOTS_H ? this.sliderSize[0] : this.sliderSize[1];
    let step = mainLength / (len - 1);
    return new Array(len).fill('').map((_, index) => index === 0
      ? 0
      : index === len - 1
        ? mainLength
        : index * step + ~~(Math.random() * step * RANDOMIZE))
      .sort((a, b) => a - b);
  }

  rotate(arr: number[][]) {
    return arr[0].reduce((acc: number[][], _, index) => {
      return  acc.concat([arr.map((e) => {
        return e[index]
      })])
    }, [])
  }

  rnd(limit: number) {
    return Math.random() * limit;
  }

}
