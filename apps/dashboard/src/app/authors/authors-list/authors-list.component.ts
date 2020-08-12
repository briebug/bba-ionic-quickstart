import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Author } from '@bba/api-interfaces';

@Component({
  selector: 'bba-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent {
  @Input() authors: Author[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
