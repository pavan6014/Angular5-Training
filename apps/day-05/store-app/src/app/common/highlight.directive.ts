import {
  Directive,
  OnInit,
  Input,
  HostListener,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  private defaultColor = 'yellow';
  @Input() color;

  constructor(private hostElement: ElementRef) {}

  @HostListener('mouseover')
  onMouseEnter() {
    const colorToApply = this.color || this.defaultColor;
    this.setColor(colorToApply);
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.setColor('');
  }

  ngOnInit() {}

  setColor(color) {
    this.hostElement.nativeElement.style.backgroundColor = color;
  }
}
