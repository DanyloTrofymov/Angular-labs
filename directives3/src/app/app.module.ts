import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ValueDirective } from './value.directive';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, ValueDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
