import { Component } from '@angular/core';
import { AppCounterService } from './app-conuter.service';
import { LocalCounterService } from './local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalCounterService]
})
export class AppComponent {
  constructor(public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService) { }
  title = 'service2';
}
