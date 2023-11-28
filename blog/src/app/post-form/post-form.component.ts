import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  id = 2;
  title = '';
  text = '';
  myDate$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })
  constructor() { }
  date!: Date
  ngOnInit(): void {
    this.myDate$.subscribe(date => {
      this.date = date
    })
  }
  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        id: ++this.id,
        title: this.title,
        text: this.text,
        date: this.date
      }
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
}
