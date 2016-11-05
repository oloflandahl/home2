import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: 'app/app-header/app-header.html',
  styleUrls: ['app/app-header/app-header.css']
})

export class AppHeaderComponent implements OnInit {

  public isSticky: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isSticky = this.document.body.scrollTop > 0;
  }
}