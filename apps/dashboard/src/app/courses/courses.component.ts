import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author, Course } from '@bba/api-interfaces';
import { AuthorsFacade, CoursesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  authors$: Observable<Author[]> = this.authorsFacade.allAuthors$;
  courses$: Observable<Course[]> = this.coursesFacade.allCourses$;
  selectedCourse$: Observable<Course> = this.coursesFacade.selectedCourse$;

  constructor(
    private coursesFacade: CoursesFacade,
    private authorsFacade: AuthorsFacade
  ) {}

  ngOnInit(): void {
    this.reset();
    this.coursesFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadAuthors();
    this.loadCourses();
    this.coursesFacade.selectCourse(null);
  }

  selectCourse(course: Course) {
    this.coursesFacade.selectCourse(course.id);
  }

  loadCourses() {
    this.coursesFacade.loadCourses();
  }

  loadAuthors() {
    this.authorsFacade.loadAuthors();
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.coursesFacade.updateCourse(course);
    } else {
      this.coursesFacade.createCourse(course);
    }
  }

  deleteCourse(course: Course) {
    this.coursesFacade.deleteCourse(course);
  }
}
