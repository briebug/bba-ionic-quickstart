import { Injectable } from '@angular/core';
import { Author } from '@bba/api-interfaces';
import { AuthorsService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as AuthorsActions from './authors.actions';

@Injectable()
export class AuthorsEffects {
  @Effect() loadAuthors$ = this.actions$.pipe(
    ofType(AuthorsActions.loadAuthors),
    fetch({
      run: (action) =>
        this.authorsService
          .all()
          .pipe(
            map((authors: Author[]) =>
              AuthorsActions.loadAuthorsSuccess({ authors })
            )
          ),
      onError: (action, error) => AuthorsActions.loadAuthorsFailure({ error }),
    })
  );

  @Effect() loadAuthor$ = this.actions$.pipe(
    ofType(AuthorsActions.loadAuthor),
    fetch({
      run: (action) =>
        this.authorsService
          .find(action.authorId)
          .pipe(
            map((author: Author) =>
              AuthorsActions.loadAuthorSuccess({ author })
            )
          ),
      onError: (action, error) => AuthorsActions.loadAuthorFailure({ error }),
    })
  );

  @Effect() createAuthor$ = this.actions$.pipe(
    ofType(AuthorsActions.createAuthor),
    pessimisticUpdate({
      run: (action) =>
        this.authorsService
          .create(action.author)
          .pipe(
            map((author: Author) =>
              AuthorsActions.createAuthorSuccess({ author })
            )
          ),
      onError: (action, error) => AuthorsActions.createAuthorFailure({ error }),
    })
  );

  @Effect() updateAuthor$ = this.actions$.pipe(
    ofType(AuthorsActions.updateAuthor),
    pessimisticUpdate({
      run: (action) =>
        this.authorsService
          .update(action.author)
          .pipe(
            map((author: Author) =>
              AuthorsActions.updateAuthorSuccess({ author })
            )
          ),
      onError: (action, error) => AuthorsActions.updateAuthorFailure({ error }),
    })
  );

  @Effect() deleteAuthor$ = this.actions$.pipe(
    ofType(AuthorsActions.deleteAuthor),
    pessimisticUpdate({
      run: (action) =>
        this.authorsService
          .delete(action.author)
          .pipe(
            map((author: Author) =>
              AuthorsActions.deleteAuthorSuccess({ author })
            )
          ),
      onError: (action, error) => AuthorsActions.deleteAuthorFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}
}
