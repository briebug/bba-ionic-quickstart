import { Component } from '@angular/core';
import { CoursesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage {
  courses$ = this.coursesFacade.allCourses$;

  constructor(private coursesFacade: CoursesFacade) {}
}
