import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<input type="number" [(ngModel)]="number1">
+
<input type="number" [(ngModel)]="number2">

<div *sum="let result from number1 and number2">Сума = {{ result }}</div>
  `,
  styles: []
})
export class AppComponent {
  number1: number = 20;
  number2: number = 30;
}
