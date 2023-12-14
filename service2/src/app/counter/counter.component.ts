import { Component } from '@angular/core';
import { LocalCounterService } from '../local-counter.service';
import { AppCounterService } from '../app-conuter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [LocalCounterService]
})

export class CounterComponent {
  constructor(public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService) { }
  title = 'service2';
}
