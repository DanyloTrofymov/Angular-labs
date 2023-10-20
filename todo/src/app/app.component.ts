import { Component } from '@angular/core';
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Тарас", [
    new TodoItem("Зробити пробіжку", true),
    new TodoItem("Купити квіти"),
    new TodoItem("Забрати квитки"),
  ]);
  get username(): string {
    return this.list.user;
  }
  get itemCount(): number {
    return this.list.items
      .filter(item => !item.complete).length;
  }
  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
  addItem(newItem: string, newDate: string) {
    if (newItem != "" && newDate != "") {
      this.list.addItem(newItem, newDate);
    }
  }
  showComplete: boolean = false;
}
