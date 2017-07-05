import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-img',
  templateUrl: 'app-back-img.component.html',
  styleUrls: ['app-back-img.component.less']
})

export class AppBackImgComponent implements OnInit {
  public bgNo = 1;

  constructor() { }

  ngOnInit(): void {
    this.bgNo = getRandomInt(1, 4);
  }
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
