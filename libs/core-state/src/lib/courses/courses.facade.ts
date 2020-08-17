import { Injectable } from '@angular/core';
import { Course } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { getNavigatedCourse, getFullCourses } from '..';
import * as CoursesActions from './courses.actions';
import * as fromCourses from './courses.reducer';
import * as CoursesSelectors from './courses.selectors';

@Injectable({
  providedIn: 'root',
})
export class CoursesFacade {
  loaded$ = this.store.pipe(select(CoursesSelectors.getCoursesLoaded));
  allCourses$ = this.store.pipe(select(getFullCourses));
  selectedCourse$ = this.store.pipe(select(CoursesSelectors.getSelectedCourse));
  navigatedCourse$ = this.store.pipe(select(getNavigatedCourse));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === CoursesActions.createCourse({} as any).type ||
        action.type === CoursesActions.updateCourse({} as any).type ||
        action.type === CoursesActions.deleteCourse({} as any).type
    )
  );

  constructor(
    private store: Store<fromCourses.CoursesPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectCourse(selectedId: string) {
    this.dispatch(CoursesActions.selectCourse({ selectedId }));
  }

  loadCourses() {
    this.dispatch(CoursesActions.loadCourses());
  }

  loadCourse(courseId: string) {
    this.dispatch(CoursesActions.loadCourse({ courseId }));
  }

  createCourse(course: Course) {
    this.dispatch(CoursesActions.createCourse({ course }));
  }

  updateCourse(course: Course) {
    this.dispatch(CoursesActions.updateCourse({ course }));
  }

  deleteCourse(course: Course) {
    this.dispatch(CoursesActions.deleteCourse({ course }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
