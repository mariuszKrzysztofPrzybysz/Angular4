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
        posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement): void {
    //Optimistic Create
    let newPost: any = { title: input.value };
    this.posts.splice(0, 0, newPost);

    input.value = '';

    this._postService.create(newPost)
      .subscribe(
        createdPost => {
          newPost['id'] = createdPost.id;

        },
        (error: AppError) => {
          //Rollback create
          this.posts.splice(0, 1);

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
    let title: any = { title: post.title };
    this._postService.update(id, title)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
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
    //Optimistic delete
    let id = post.id;

    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this._postService.delete(id)
      .subscribe(
        null,
        (error: Response) => {
          //Rollback delete
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          }
          else {
            throw error;
          }
        });
  }
}
