import { Author } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as AuthorsActions from './authors.actions';

export const AUTHORS_FEATURE_KEY = 'authors';

export interface AuthorsState extends EntityState<Author> {
  selectedId?: string | number; // which Authors record has been selected
  loaded: boolean; // has the Authors list been loaded
  error?: string | null; // last known error (if any)
}

export interface AuthorsPartialState {
  readonly [AUTHORS_FEATURE_KEY]: AuthorsState;
}

export const authorsAdapter: EntityAdapter<Author> = createEntityAdapter<
  Author
>();

export const initialAuthorsState: AuthorsState = authorsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _authorsReducer = createReducer(
  initialAuthorsState,
  on(AuthorsActions.selectAuthor, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(AuthorsActions.resetSelectedAuthor, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(AuthorsActions.resetAuthors, (state) => authorsAdapter.removeAll(state)),
  // Load authors
  on(AuthorsActions.loadAuthors, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthorsActions.loadAuthorsSuccess, (state, { authors }) =>
    authorsAdapter.setAll(authors, { ...state, loaded: true })
  ),
  on(AuthorsActions.loadAuthorsFailure, onFailure),
  // Load author
  on(AuthorsActions.loadAuthor, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthorsActions.loadAuthorSuccess, (state, { author }) =>
    authorsAdapter.upsertOne(author, { ...state, loaded: true })
  ),
  on(AuthorsActions.loadAuthorFailure, onFailure),
  // Add author
  on(AuthorsActions.createAuthorSuccess, (state, { author }) =>
    authorsAdapter.addOne(author, state)
  ),
  on(AuthorsActions.createAuthorFailure, onFailure),
  // Update author
  on(AuthorsActions.updateAuthorSuccess, (state, { author }) =>
    authorsAdapter.updateOne({ id: author.id, changes: author }, state)
  ),
  on(AuthorsActions.updateAuthorFailure, onFailure),
  // Delete author
  on(AuthorsActions.deleteAuthorSuccess, (state, { author }) =>
    authorsAdapter.removeOne(author.id, state)
  ),
  on(AuthorsActions.deleteAuthorFailure, onFailure)
);

export function authorsReducer(
  state: AuthorsState | undefined,
  action: Action
) {
  return _authorsReducer(state, action);
}
