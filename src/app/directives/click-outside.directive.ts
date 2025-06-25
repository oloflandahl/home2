import { Directive, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Directive({
    selector: '[appClickOutside]',
    standalone: false
})

export class ClickOutsideDirective {

  @Output()
  public appClickOutside = new EventEmitter<MouseEvent>();

  constructor(private element: ElementRef) {

  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
      if (!targetElement) {
          return;
      }

      const clickedInside = this.element.nativeElement.contains(targetElement);
      if (!clickedInside) {
          this.appClickOutside.emit(event);
      }
  }
    
}
