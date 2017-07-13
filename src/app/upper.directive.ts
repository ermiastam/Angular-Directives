import { Directive,ElementRef, Renderer,Input} from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  

  constructor(private e: ElementRef, private r: Renderer) { 
     // e.nativeElement.style.display = 'none'    
      r.setElementStyle(e.nativeElement, 'text-transform', 'uppercase')
     
  }

   


}
