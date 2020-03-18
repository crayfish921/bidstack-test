import { 
  Directive,
  Renderer2, 
  ElementRef,
  ViewContainerRef, 
  Input,
  TemplateRef, 
  ContentChild, 
  HostListener 
} from '@angular/core';

@Directive({
  selector: '[appCompaniesTooltip]'
})
export class CompaniesTooltipDirective {
  constructor(
      private renderer: Renderer2,
      private elementRef: ElementRef,
      private viewContainerRef: ViewContainerRef) { }

  @ContentChild( "tooltipTemplate" ) private tooltipTemplateRef: TemplateRef<Object>;

  @HostListener('mouseenter') onMouseEnter(): void {    
    const view = this.viewContainerRef.createEmbeddedView(this.tooltipTemplateRef);
    view.rootNodes.forEach(node => 
      this.renderer.appendChild(this.elementRef.nativeElement, node));
  }

  @HostListener('mouseleave') onMouseLeave(): void {        
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }  
  }  
}
