import { Component, OnInit } from '@angular/core';
import { Course, Lesson } from '@bba/api-interfaces';
import { CoursesFacade, LessonsFacade } from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-lesson-details',
  templateUrl: './lesson-details.page.html',
  styleUrls: ['./lesson-details.page.scss'],
})
export class LessonDetailsPage implements OnInit {
  currentCourse$: Observable<Course> = this.coursesFacade.navigatedCourse$;
  currentLesson$: Observable<Lesson> = this.lessonsFacade.navigatedLesson$;

  constructor(
    private coursesFacade: CoursesFacade,
    private lessonsFacade: LessonsFacade
  ) {}

  ngOnInit() {
    this.coursesFacade.loadCourses();
    this.lessonsFacade.loadLessons();
  }
}
