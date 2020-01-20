import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  //inputs: ["isFavourite"]//drugi sposób, wystarczy tylko to
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite: boolean;
  // @Input("is-favourite") isFavourite: boolean
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }

}
