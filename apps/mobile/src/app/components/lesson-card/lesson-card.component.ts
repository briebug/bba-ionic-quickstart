import {Component, Input} from '@angular/core';
import { Course, Lesson } from '@bba/api-interfaces';

@Component({
  selector: 'bba-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent {
  @Input() course: Course;
  @Input() lesson: Lesson;
}
