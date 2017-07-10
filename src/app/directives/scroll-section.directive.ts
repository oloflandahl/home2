import { Directive, OnInit, Input, Renderer, ElementRef } from '@angular/core';

import { ScrollSectionService } from '../services/scroll-section.service';

@Directive({
  selector: '[appScrollSection]',
  host: {
    '[id]': 'id'
  }
})

export class ScrollSectionDirective implements OnInit {

  @Input('appScrollSection') id: string;

  constructor(private scrollService: ScrollSectionService, private renderer: Renderer, private element: ElementRef) {

  }

  ngOnInit() {
    this.scrollService.registerSection({
      id: this.id,
      element: this.element
    });
  }
}
