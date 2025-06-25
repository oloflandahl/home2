import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { ScrollSectionService } from '../services/scroll-section.service';

@Directive({
    selector: '[appScrollSection]',
    host: {
        '[id]': 'id'
    },
    standalone: false
})

export class ScrollSectionDirective implements OnInit {

  @Input('appScrollSection') id: string;

  constructor(private scrollService: ScrollSectionService, private renderer: Renderer2, private element: ElementRef) {

  }

  ngOnInit() {
    this.scrollService.registerSection({
      id: this.id,
      element: this.element
    });
  }
}
