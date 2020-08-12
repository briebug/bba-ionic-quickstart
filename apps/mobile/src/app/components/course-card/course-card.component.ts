import { Component, Input } from '@angular/core';
import { Course } from '@bba/api-interfaces';

@Component({
  selector: 'bba-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: Course;
  @Input() navigate = true;
  @Input() lessonCount = 100;
}
