import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private _url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: Http) {
    _http.get(this._url)
      .subscribe(
        response => {
          this.posts = response.json();
        });
  }

  ngOnInit() {
  }

  createPost(input: HTMLInputElement): void {
    let post = { title: input.value };
    input.value = '';
    this._http.post(this._url, JSON.stringify(post))
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        });
  }

  updatePost(post: any): void {
    let id = post.id;
    this._http.patch(`${this._url}/${id}`, JSON.stringify({ isRead: true }))
      .subscribe(
        response => {
          console.log(response.json());
        });
    // this._http.put(this._url,JSON.stringify(post))...
  }

  deletePost(post: any): void {
    let id = post.id;
    this._http.delete(`${this._url}/${id}`)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        });
  }
}
