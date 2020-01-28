import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:username/:id', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
