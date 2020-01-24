import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
          return throwError(new BadInputError());
        }

        return throwError(new AppError(error));
      }));
  }

  updatePost(id) {
    return this._http.patch(`${this._url}/${id}`, JSON.stringify({ isRead: true }))
      .pipe(catchError((error: Response) => {
        switch (error.status) {
          case 400:
            return throwError(new BadInputError());
          case 404:
            return throwError(new NotFoundError());
          default:
            return throwError(new AppError(error));
        }
      }));
  }

  deletePost(id) {
    return this._http.delete(`${this._url}/${id}`)
      .pipe(catchError((error: Response) => {
        if (error.status === 404) {
          return throwError(new NotFoundError());
        }

        return throwError(new AppError(error));
      }));
  }
}
