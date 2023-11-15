import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
<p [valuesize]="fontSize" [defaultSize]="'14px'">Hello Angular</p>
<p>(цікаво, що це працює для параметрів від 6px до 29px включно та від 3vh до 12vh)</p>
<input type="text" [(ngModel)]="fontSize" placeholder="Enter Font Size" />
<p>Angular представляє модульну архітектуру додатку</p>
</div>`
})
export class AppComponent {
  fontSize = '28px';
}
