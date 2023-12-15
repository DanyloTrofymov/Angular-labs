import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './data.component';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { DataJsonService } from './data-json.service';
import { DataJsonComponent } from './data-json.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, DataComponent, DataJsonComponent],
  providers: [DataService, LogService, DataJsonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
