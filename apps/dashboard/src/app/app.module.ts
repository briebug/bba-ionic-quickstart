import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { UiLoginModule } from '@bba/ui-login';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsListComponent } from './lessons/lessons-list/lessons-list.component';
import { LessonDetailsComponent } from './lessons/lesson-details/lesson-details.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorsListComponent,
    AuthorDetailsComponent,
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    LessonsComponent,
    LessonsListComponent,
    LessonDetailsComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
