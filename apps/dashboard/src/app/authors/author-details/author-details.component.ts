import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Author } from '@bba/api-interfaces';

@Component({
  selector: 'bba-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss'],
})
export class AuthorDetailsComponent {
  currentAuthor: Author;
  originalTitle = '';
  @Input() set author(value: Author) {
    if (value) this.originalTitle = value.title;
    this.currentAuthor = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
