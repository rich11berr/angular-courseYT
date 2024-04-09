import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myChangeColor]'
})
export class MyChangeColorDirectiveDirective implements AfterViewInit {

  @HostBinding('style.color') color: string = 'purple';

  @HostBinding('style.background') background: string = 'transparent';

  @HostListener('mouseenter') handleEnter(): void {
    this.background = this.getChangeColor();
  }

  @HostListener('mouseleave') handleLeave(): void {
    this.background = 'transparent';
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.color = this.getChangeColor();
    }, 2500)
  }

  private getChangeColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
