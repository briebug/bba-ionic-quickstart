import { Component, Input } from '@angular/core';
import { Course } from '@bba/api-interfaces';

@Component({
  selector: 'bba-course-lessons-list',
  templateUrl: './course-lessons-list.component.html',
  styleUrls: ['./course-lessons-list.component.scss'],
})
export class CourseLessonsListComponent {
  @Input() course: Course;
}
