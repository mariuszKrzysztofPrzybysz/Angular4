import { Component, OnInit } from '@angular/core';
import { UserFollowersService } from 'src/app/services/github/user-followers.service';

@Component({
  selector: 'app-github-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit {
  userFollowers: any[];

  constructor(private service: UserFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(userFollowers => this.userFollowers = userFollowers);
  }

}
