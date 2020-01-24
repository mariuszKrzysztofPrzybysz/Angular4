import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { AppError } from '../common/errors/app-error';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input-error';

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
    return this._http.post(this._url, JSON.stringify(post))
      .pipe(catchError((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInputError());
        }

        return Observable.throw(new AppError(error));
      }));
  }

  updatePost(id) {
    return this._http.patch(`${this._url}/${id}`, JSON.stringify({ isRead: true }))
      .pipe(catchError((error: Response) => {
        switch (error.status) {
          case 400:
            return Observable.throw(new BadInputError());
          case 404:
            return Observable.throw(new NotFoundError());
          default:
            return Observable.throw(new AppError(error));
        }
      }));
  }

  deletePost(id) {
    return this._http.delete(`${this._url}/${id}`)
      .pipe(catchError((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError());
        }

        return Observable.throw(new AppError(error));
      }));
  }
}
