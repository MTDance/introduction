import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
selector:'p[highlight]',
})

export class HighlightDirective {
    @HostBinding('style.backgroundColor')
    color= 'transparent';

    @Input('background-color')
    backgroundColor = 'yellow';

    @Input('base-color')
    baseColor = 'transparent';

    @HostListener('mouseenter')
    onMouseEnter() {
        this.color = this.backgroundColor;
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.color = this.baseColor;
    }
}