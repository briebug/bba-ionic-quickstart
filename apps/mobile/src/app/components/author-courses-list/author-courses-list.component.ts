import { Component, Input } from '@angular/core';
import { Author } from '@bba/api-interfaces';

@Component({
  selector: 'bba-author-course-list',
  templateUrl: './author-courses-list.component.html',
  styleUrls: ['./author-courses-list.component.scss'],
})
export class AuthorCoursesListComponent {
  @Input() author: Author;
}
