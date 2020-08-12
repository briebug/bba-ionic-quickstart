import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AUTHORS_FEATURE_KEY,
  AuthorsState,
  authorsAdapter,
} from './authors.reducer';

// Lookup the 'Authors' feature state managed by NgRx
export const getAuthorsState = createFeatureSelector<AuthorsState>(
  AUTHORS_FEATURE_KEY
);

const { selectAll, selectEntities } = authorsAdapter.getSelectors();

export const getAuthorsLoaded = createSelector(
  getAuthorsState,
  (state: AuthorsState) => state.loaded
);

export const getAuthorsError = createSelector(
  getAuthorsState,
  (state: AuthorsState) => state.error
);

export const getAllAuthors = createSelector(
  getAuthorsState,
  (state: AuthorsState) => selectAll(state)
);

export const getAuthorsEntities = createSelector(
  getAuthorsState,
  (state: AuthorsState) => selectEntities(state)
);

export const getSelectedAuthorId = createSelector(
  getAuthorsState,
  (state: AuthorsState) => state.selectedId
);

export const getSelectedAuthor = createSelector(
  getAuthorsEntities,
  getSelectedAuthorId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
