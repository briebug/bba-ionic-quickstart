import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '@bba/api-interfaces';
import { AuthorsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  authors$: Observable<Author[]> = this.authorsFacade.allAuthors$;
  selectedAuthor$: Observable<Author> = this.authorsFacade.selectedAuthor$;

  constructor(private authorsFacade: AuthorsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.authorsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadAuthors();
    this.authorsFacade.selectAuthor(null);
  }

  selectAuthor(author: Author) {
    this.authorsFacade.selectAuthor(author.id);
  }

  loadAuthors() {
    this.authorsFacade.loadAuthors();
  }

  saveAuthor(author: Author) {
    if (author.id) {
      this.authorsFacade.updateAuthor(author);
    } else {
      this.authorsFacade.createAuthor(author);
    }
  }

  deleteAuthor(author: Author) {
    this.authorsFacade.deleteAuthor(author);
  }
}
