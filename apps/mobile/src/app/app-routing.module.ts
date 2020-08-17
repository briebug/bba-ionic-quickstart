import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesPageModule)
  },
  {
    path: 'courses/:courseId',
    loadChildren: () =>
      import('./pages/course-details/course-details.module').then((m) => m.CourseDetailsPageModule)
  },
  {
    path: 'lessons',
    loadChildren: () => import('./pages/lessons/lessons.module').then((m) => m.LessonsPageModule)
  },
  {
    path: 'courses/:courseId/lessons/:lessonId',
    loadChildren: () =>
      import('./pages/lesson-details/lesson-details.module').then((m) => m.LessonDetailsPageModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./pages/authors/authors.module').then((m) => m.AuthorsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

