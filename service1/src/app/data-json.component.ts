import { Component, OnInit } from '@angular/core'
import { DataService } from './data.service'
import { LogService } from './log.service'
import { Phone } from './phone'
import { DataJsonService } from './data-json.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
@Component({
  selector: 'data-json-comp',
  template: `
<hr />
<table>
<thead>
<tr>
<th class="cardinput">Модель</th>
<th class="cardinput">Ціна</th>
</tr>
</thead>
<tbody>
<tr *ngFor="let item of items">
<td class="cardinput">{{item.name}}</td>
<td class="cardinput">{{item.price}}</td>
</tr>
</tbody>
</table>
`,
  styleUrls: ['./app.component.css'],
  providers: [DataJsonService, LogService, HttpClient]
})
export class DataJsonComponent implements OnInit {
  name: string = '';
  price: number = 0;
  items: Phone[] = []
  constructor(private dataService: DataJsonService) { }
  ngOnInit() {
    this.dataService.getData().subscribe(
      (data: Phone[]) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
