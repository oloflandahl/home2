import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from "@angular/common";

import { Line } from '../models/line.model';


@Injectable()
export class ScrollService {

  constructor(@Inject(DOCUMENT) private _document: Document, @Inject(Window) private _window: Window) {
  }

  getScrollTop(): number {
    return this._document.documentElement && this._document.documentElement.scrollTop || this._document.body.scrollTop;
  }

  getViewLine(): Line {
    const scrollTop = this.getScrollTop();
    return new Line({
      start: scrollTop,
      length: this._window.innerHeight,
    });
  }

}
