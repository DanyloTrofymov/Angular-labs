import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: ` <div>
<p bold>Вивчаю директиви</p>
<p>Створення атрибутивних директив</p>
</div>
<div>
<p italic>Вивчаю директиви</p>
<p>Створення атрибутивних директив</p>
</div>
<div>
<p mousebold>Робота з декоратором @HostListener</p>
<p>Реагування на покажчик миші</p>
</div>
<div>
<p mouseitalic>Робота з декоратором @HostBinding</p>
<p>Реагування на покажчик миші при допомозі @HostBinding</p>
</div>
<div>
<p hostmousebold>Робота з властивістю host</p>
<p>Реагування на покажчик миші при допомозі властивості host</p>
</div>`
})
export class AppComponent { }
