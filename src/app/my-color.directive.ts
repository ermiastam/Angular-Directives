import { Directive,Output,Renderer ,ElementRef,HostListener,EventEmitter} from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  constructor(private e:ElementRef) { }
 colors :string[]=['yellow','red','blue']
  index =0;
 @HostListener('click') foo(){
     if(this.index<this.colors.length){
              this.e.nativeElement.style.color = this.colors[this.index];
              this.mycolorout();
              this.index=this.index+1;  
  }else {    this.index =0;
             this.e.nativeElement.style.color = this.colors[this.index];
             this.mycolorout();
             this.index=this.index+1;}
}

@Output() coloroutput = new EventEmitter<string>();

mycolorout(){
  this.coloroutput.emit(this.colors[this.index]);
}


}
