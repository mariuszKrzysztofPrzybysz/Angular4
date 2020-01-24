import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

/**
 * https://angular.io/guide/lifecycle-hooks
 *
 * Lifecycle Hooks: OnInit, OnChanges, DoCheck, AfterContentInit, ...
 */
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        },
        (error: Response) => {
          alert('An unexpected error occured.');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement): void {
    let post = { title: input.value };
    input.value = '';
    this._postService.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: Response) => {
          if (error.status === 400) {
            //this.form.SetErrors(error.json());
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
        });
  }

  updatePost(post: any): void {
    let id = post.id;
    this._postService.updatePost(id)
      .subscribe(
        response => {
          console.log(response.json());
        },
        (error: Response) => {
          alert('An unexpected error occured.');
          console.log(error);
        });
    // this._http.put(this._url,JSON.stringify(post))...
  }

  deletePost(post: any): void {
    let id = post.id;
    this._postService.deletePost(id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error.status === 404) {
            alert('This post has already been deleted')
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }

        });
  }
}
