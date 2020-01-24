import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get(this._url);
  }

  createPost(post) {
    return this._http.post(this._url, JSON.stringify(post));
  }

  updatePost(id) {
    return this._http.patch(`${this._url}/${id}`, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this._http.delete(`${this._url}/${id}`);
  }
}
