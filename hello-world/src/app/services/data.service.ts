import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/errors/app-error';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input-error';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private _url: string, private _http: Http) { }

    getAll() {
        return this._http.get(this._url)
            .pipe(map(response => response.json()))
            .pipe(catchError(this.handleError));
    }

    create(resource) {
        return this._http.post(this._url, JSON.stringify(resource))
            .pipe(map(response => response.json()))
            .pipe(catchError(this.handleError));
    }

    update(id, resource) {
        return this._http.patch(`${this._url}/${id}`, JSON.stringify(resource))
            .pipe(map(response => response.json()))
            .pipe(catchError(this.handleError));
    }

    delete(id) {
        return this._http.delete(`${this._url}/${id}`)
            .pipe(catchError(this.handleError));
    }


    private handleError(error: Response) {
        switch (error.status) {
            case 400:
                return throwError(new BadInputError());
            case 404:
                return throwError(new NotFoundError());
            default:
                return throwError(new AppError(error));
        }
    }
}
