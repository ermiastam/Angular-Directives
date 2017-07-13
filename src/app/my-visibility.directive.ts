import { Directive ,Input,Renderer,ElementRef} from '@angular/core';

@Directive({
  selector: '[mydir]'
})
export class MyVisibilityDirective {

constructor(private e: ElementRef, private r: Renderer) {}


 @Input() hideme = false;
ngOnInit(){
      
        if(this.hideme) {this.e.nativeElement.style.display='none';}
         
            }
}
