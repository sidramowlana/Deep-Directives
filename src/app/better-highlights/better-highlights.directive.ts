import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor:string='transparent';
  @Input() highLightColor:string='yellow';
  @HostBinding('style.backgroundColor') backGround:string;


  constructor(private eleRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit()
  {
    this.backGround=this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue');
  }


  @HostListener('mouseenter') mouseEnter()
  {
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','yellow');
    this.backGround=this.highLightColor;
  }

  @HostListener('mouseleave') mouseLeave(data:Event)
  {
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
    this.backGround=this.defaultColor;
  }
}
