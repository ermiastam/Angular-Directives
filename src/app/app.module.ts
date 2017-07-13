import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { UpperDirective } from './upper.directive';
import { MyVisibilityDirective } from './my-visibility.directive';
import { MyColorDirective } from './my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    UpperDirective,
    MyVisibilityDirective,
    MyColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
