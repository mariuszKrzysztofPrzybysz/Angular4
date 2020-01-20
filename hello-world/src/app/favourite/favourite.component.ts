import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  //inputs: ["isFavourite"]//drugi sposób, wystarczy tylko to
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite: boolean;
  // @Input("is-favourite") isFavourite: boolean

  @Output('change') change = new EventEmitter();//nazwa zdarzenia change MUSI ODPOWIADAĆ
  //nazwie zdarzenia z pliku html rodzica (app.component.html)

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;

    this.change.emit({
      method: "My favourite component",
      result: this.isFavourite
    } as IFavouriteChangedEventArgs);
  }
}

export interface IFavouriteChangedEventArgs {
  method: string,
  result: boolean
}
