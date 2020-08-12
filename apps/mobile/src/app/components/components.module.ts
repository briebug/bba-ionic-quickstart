import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthorCoursesListComponent } from './author-courses-list/author-courses-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseLessonsListComponent } from './course-lessons-list/course-lessons-list.component';
import { LessonCardComponent } from './lesson-card/lesson-card.component';
import { SocialShareComponent } from './social-share/social-share.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCourseCardComponent } from './user-course-card/user-course-card.component';

@NgModule({
  declarations: [
    AuthorCoursesListComponent,
    CourseCardComponent,
    CourseLessonsListComponent,
    LessonCardComponent,
    SocialShareComponent,
    UserCardComponent,
    UserCourseCardComponent,
  ],
  exports: [
    AuthorCoursesListComponent,
    CourseCardComponent,
    CourseLessonsListComponent,
    LessonCardComponent,
    SocialShareComponent,
    UserCardComponent,
    UserCourseCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ]
})
export class ComponentsModule {
}
