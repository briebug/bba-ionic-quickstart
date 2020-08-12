import { Injectable } from '@angular/core';
import { Author } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { getFullAuthors } from '..';
import * as AuthorsActions from './authors.actions';
import * as fromAuthors from './authors.reducer';
import * as AuthorsSelectors from './authors.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthorsFacade {
  loaded$ = this.store.pipe(select(AuthorsSelectors.getAuthorsLoaded));
  allAuthors$ = this.store.pipe(select(getFullAuthors));
  selectedAuthor$ = this.store.pipe(select(AuthorsSelectors.getSelectedAuthor));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === AuthorsActions.createAuthor({} as any).type ||
        action.type === AuthorsActions.updateAuthor({} as any).type ||
        action.type === AuthorsActions.deleteAuthor({} as any).type
    )
  );

  constructor(
    private store: Store<fromAuthors.AuthorsPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectAuthor(selectedId: string) {
    this.dispatch(AuthorsActions.selectAuthor({ selectedId }));
  }

  loadAuthors() {
    this.dispatch(AuthorsActions.loadAuthors());
  }

  loadAuthor(authorId: string) {
    this.dispatch(AuthorsActions.loadAuthor({ authorId }));
  }

  createAuthor(author: Author) {
    this.dispatch(AuthorsActions.createAuthor({ author }));
  }

  updateAuthor(author: Author) {
    this.dispatch(AuthorsActions.updateAuthor({ author }));
  }

  deleteAuthor(author: Author) {
    this.dispatch(AuthorsActions.deleteAuthor({ author }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
