import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, Lesson } from '@bba/api-interfaces';
import { CoursesFacade } from '@bba/core-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bba-lesson-details',
  templateUrl: './lesson-details.page.html',
  styleUrls: ['./lesson-details.page.scss'],
})
export class LessonDetailsPage implements OnInit {
  currentCourse$: Observable<Course>;
  currentLesson$: Observable<Lesson>;

  constructor(
    private coursesFacade: CoursesFacade,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.paramMap.get('courseId');
    const lessonId = this.activatedRoute.snapshot.paramMap.get('lessonId');

    this.currentCourse$ = this.coursesFacade.allCourses$.pipe(
      map((courses: Course[]) => courses.find(course => course.id === courseId))
    );

    this.currentLesson$ = this.currentCourse$.pipe(
      map((course: Course) => course.lessons.find(lesson => lesson.id === lessonId))
    );
  }
}
