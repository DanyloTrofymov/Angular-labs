import { TodoItem } from "./todoItem";
export class TodoList {
  constructor(public user: string, private todoItems: TodoItem[] = []) {
    // no statements required
  }
  get items(): readonly TodoItem[] {
    return this.todoItems;
  }
  addItem(task: string, date: string) {
    this.todoItems.push(new TodoItem(task, false, date));
  }
}
