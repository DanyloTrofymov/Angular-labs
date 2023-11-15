import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WhileDirective } from './while.directive';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, WhileDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
