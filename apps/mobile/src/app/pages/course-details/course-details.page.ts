import { Component, OnInit } from '@angular/core';
import { Course } from '@bba/api-interfaces';
import { CoursesFacade } from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {
  currentCourse$: Observable<Course> = this.coursesFacade.navigatedCourse$;

  constructor(
    private coursesFacade: CoursesFacade
  ) {}

  ngOnInit(): void {
    this.coursesFacade.loadCourses();
  }
}
