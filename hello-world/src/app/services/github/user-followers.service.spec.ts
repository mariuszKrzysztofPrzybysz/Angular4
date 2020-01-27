import { TestBed } from '@angular/core/testing';

import { UserFollowersService } from './user-followers.service';

describe('UserFollowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFollowersService = TestBed.get(UserFollowersService);
    expect(service).toBeTruthy();
  });
});
