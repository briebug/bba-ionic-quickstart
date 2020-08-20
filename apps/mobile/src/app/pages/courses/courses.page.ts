import { Component } from '@angular/core';
import { CoursesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage {
  courses$ = this.coursesFacade.allCourses$;

  constructor(private coursesFacade: CoursesFacade) { }
}
