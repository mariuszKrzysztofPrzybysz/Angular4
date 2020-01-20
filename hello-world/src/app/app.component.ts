import { Component } from '@angular/core';
import { IFavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    "title": "Title",
    "isFavourite": true
  }

  onFavouriteChanged(eventArgs: IFavouriteChangedEventArgs) {
    console.log("Favourite chagned. Title: " + eventArgs.method);
  }
}
