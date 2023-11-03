import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
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
  constructor() { }
  ngOnInit(): void {
    console.log('PostFormComponent ngOnInit');
  }
  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        id: ++this.id,
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post);
      console.log('New post', post);
      this.title = this.text = '';
    }
  }
}
