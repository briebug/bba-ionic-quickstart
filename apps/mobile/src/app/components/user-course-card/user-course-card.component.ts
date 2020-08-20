import { Component, Input } from '@angular/core';
import { User } from '@bba/api-interfaces';

@Component({
  selector: 'bba-user-course-card',
  templateUrl: './user-course-card.component.html',
  styleUrls: ['./user-course-card.component.scss'],
})
export class UserCourseCardComponent {
  @Input() user: User;
}
