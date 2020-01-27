import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { UserFollowersComponent } from './components/github/user-followers/user-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserFollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
