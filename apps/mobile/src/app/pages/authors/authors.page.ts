import { Component } from '@angular/core';
import { AuthorsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage {
  authors$ = this.authorsFacade.allAuthors$;

  constructor(private authorsFacade: AuthorsFacade) {}
}
