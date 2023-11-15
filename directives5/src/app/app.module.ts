import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SumDirective } from './sum.directive';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, SumDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
