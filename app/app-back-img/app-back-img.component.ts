import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-img',
  templateUrl: 'app/app-back-img/app-back-img.html',
  styleUrls: ['app/app-back-img/app-back-img.css']
})

export class AppBackImgComponent implements OnInit {
  public bgNo: number = 1;

  constructor() { }

  ngOnInit() {
    this.bgNo = getRandomInt(1, 4);
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}