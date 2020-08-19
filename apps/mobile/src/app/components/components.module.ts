import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthorCoursesListComponent } from './author-courses-list/author-courses-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseLessonsListComponent } from './course-lessons-list/course-lessons-list.component';
import { LessonCardComponent } from './lesson-card/lesson-card.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SocialShareComponent } from './social-share/social-share.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCourseCardComponent } from './user-course-card/user-course-card.component';

@NgModule({
  declarations: [
    AuthorCoursesListComponent,
    CourseCardComponent,
    CourseLessonsListComponent,
    LessonCardComponent,
    MenuHeaderComponent,
    MenuListComponent,
    SocialShareComponent,
    UserCardComponent,
    UserCourseCardComponent,
  ],
  exports: [
    AuthorCoursesListComponent,
    CourseCardComponent,
    CourseLessonsListComponent,
    LessonCardComponent,
    MenuHeaderComponent,
    MenuListComponent,
    SocialShareComponent,
    UserCardComponent,
    UserCourseCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ]
})
export class ComponentsModule {
}
