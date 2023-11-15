import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="condition = !condition">Toggle Condition</button>

  <p *appOtherIf="condition" class="otherif a">
    (A) Condition is false.
  </p>
  <p *appOtherIf="!condition" class="otherif b">
    (B) Although the condition is true, this paragraph is displayed.
  </p>`
})
export class AppComponent {
  condition: boolean = false;
}
