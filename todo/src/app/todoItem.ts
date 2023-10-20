export class TodoItem {
  constructor(
    public task: string,
    public complete: boolean = false,
    public date: string = new Date().toLocaleDateString(),) {
    // оголошення не потрібні
  }
}
