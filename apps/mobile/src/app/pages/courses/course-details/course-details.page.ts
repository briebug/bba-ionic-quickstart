import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '@bba/api-interfaces';
import { CoursesFacade } from '@bba/core-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bba-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {
  currentCourse$: Observable<Course>;

  constructor(
    private coursesFacade: CoursesFacade,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.paramMap.get('courseId');
    this.currentCourse$ = this.coursesFacade.allCourses$.pipe(
      map((courses: Course[]) => courses.find(course => course.id === courseId))
    );
  }
}
