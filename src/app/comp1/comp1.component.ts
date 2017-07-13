import { Component } from '@angular/core';

@Component({
  selector: 'comp1',
  template: `
   <ul>
<div appUpper > Current Color: {{currentcolor}}</div>
<li appUpper appMyColor (coloroutput)='showcurrentcolor($event)' mydir [hideme]=false *ngFor = "let item of items">{{item}}</li>
   </ul>
   
  `,
  styles: []
})
export class Comp1Component {

  items:string[]=['item1'  ,'item2','item3','item4'];
  currentcolor;
  showcurrentcolor(color:string){
   this.currentcolor=color;
  }

}
