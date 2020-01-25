import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input-error';
import { AppError } from '../common/errors/app-error';

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
    this._postService.getAll()
      .subscribe(
        response => {
          this.posts = response.json();
        });
  }

  createPost(input: HTMLInputElement): void {
    let post = { title: input.value };
    input.value = '';
    this._postService.create(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInputError) {
            // this.form.setErrors(error.json());
            alert('Body cannot be ampty');
          }
          else {
            throw error;
          }
        });
  }

  updatePost(post: any): void {
    let id = post.id;
    this._postService.update(id)
      .subscribe(
        response => {
          console.log(response.json());
        },
        (error: Response) => {
          switch (error.constructor) {
            case BadInputError:
              alert('This post cannot be updated.');
              break;
            case NotFoundError:
              alert('This post has not been found.');
              break;
            default:
              throw error;
          }
        });
    // this._http.put(this._url,JSON.stringify(post))...
  }

  deletePost(post: any): void {
    let id = post.id;
    this._postService.delete(id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          }
          else {
            throw error;
          }
        });
  }
}
