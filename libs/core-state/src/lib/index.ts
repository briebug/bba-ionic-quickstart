import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromAuthors from './authors/authors.reducer';
import * as fromCourses from './courses/courses.reducer';
import * as fromLessons from './lessons/lessons.reducer';
import * as fromUsers from './users/users.reducer';

import * as AuthorsSelectors from './authors/authors.selectors';
import * as CoursesSelectors from './courses/courses.selectors';
import * as LessonsSelectors from './lessons/lessons.selectors';
import * as UsersSelectors from './users/users.selectors';

import { Author, Course, Lesson, User } from '@bba/api-interfaces';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromAuthors.AUTHORS_FEATURE_KEY]: fromAuthors.AuthorsState;
  [fromCourses.COURSES_FEATURE_KEY]: fromCourses.CoursesState;
  [fromLessons.LESSONS_FEATURE_KEY]: fromLessons.LessonsState;
  [fromUsers.USERS_FEATURE_KEY]: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromAuthors.AUTHORS_FEATURE_KEY]: fromAuthors.authorsReducer,
  [fromCourses.COURSES_FEATURE_KEY]: fromCourses.coursesReducer,
  [fromLessons.LESSONS_FEATURE_KEY]: fromLessons.lessonsReducer,
  [fromUsers.USERS_FEATURE_KEY]: fromUsers.usersReducer,
};

// ---------------------------------------
// Common Selectors
// ---------------------------------------
export const getFullCourses = createSelector(
  AuthorsSelectors.getAllAuthors,
  CoursesSelectors.getAllCourses,
  LessonsSelectors.getAllLessons,
  (authors: Author[], courses: Course[], lessons: Lesson[]) => {
    const updatedCourses: Course[] = courses.map((course) => {
      return Object.assign(
        {},
        course,
        { author: authors.find((author) => author.id === course.authorId) },
        { lessons: lessons.filter((lesson) => lesson.courseId === course.id) }
      );
    });

    return updatedCourses;
  }
);

export const getFullAuthors = createSelector(
  AuthorsSelectors.getAllAuthors,
  CoursesSelectors.getAllCourses,
  (authors: Author[], courses: Course[]) => {
    const updatedAuthors: Author[] = authors.map((author) => {
      return Object.assign({}, author, {
        courses: courses.filter((course) => author.id === course.authorId),
      });
    });

    return updatedAuthors;
  }
);

export const getFullUsers = createSelector(
  CoursesSelectors.getAllCourses,
  LessonsSelectors.getAllLessons,
  UsersSelectors.getAllUsers,
  (courses: Course[], lessons: Lesson[], users: User[]) => {
    const updatedUsers: User[] = users.map((user) => {
      const currentLesson = lessons.find(
        (lesson) => lesson.id === user.currentLessonId
      );

      const currentCourse = courses.find(
        (course) => course.id === currentLesson.courseId
      );

      return Object.assign({}, user, {
        currentCourse,
        currentLesson,
      });
    });

    return updatedUsers;
  }
);

export const getFullUser = createSelector(
  CoursesSelectors.getAllCourses,
  LessonsSelectors.getAllLessons,
  UsersSelectors.getSelectedUser,
  (courses: Course[], lessons: Lesson[], user: User) => {
    const currentLesson = lessons.find(
      (lesson) => lesson.id === user.currentLessonId
    );

    const currentCourse = courses.find(
      (course) => course.id === currentLesson.courseId
    );

    return Object.assign({}, user, {
      currentCourse,
      currentLesson,
    });
  }
);
