import { Author } from '@bba/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedAuthor = createAction(
  '[Authors] Reset Selected Author'
);
export const resetAuthors = createAction('[Authors] Reset Authors');

// Select Author
export const selectAuthor = createAction(
  '[Authors] Select Author',
  props<{ selectedId: string }>()
);

// Load Authors
export const loadAuthors = createAction('[Authors] Load Authors');

export const loadAuthorsSuccess = createAction(
  '[Authors] Load Authors Success',
  props<{ authors: Author[] }>()
);

export const loadAuthorsFailure = createAction(
  '[Authors] Load Authors Failure',
  props<{ error: any }>()
);

// Load Author
export const loadAuthor = createAction(
  '[Authors] Load Author',
  props<{ authorId: string }>()
);

export const loadAuthorSuccess = createAction(
  '[Authors] Load Author Success',
  props<{ author: Author }>()
);

export const loadAuthorFailure = createAction(
  '[Authors] Load Author Failure',
  props<{ error: any }>()
);

// Create Author
export const createAuthor = createAction(
  '[Authors] Create Author',
  props<{ author: Author }>()
);

export const createAuthorSuccess = createAction(
  '[Authors] Create Author Success',
  props<{ author: Author }>()
);

export const createAuthorFailure = createAction(
  '[Authors] Create Author Failure',
  props<{ error: any }>()
);

// Update Author
export const updateAuthor = createAction(
  '[Authors] Update Author',
  props<{ author: Author }>()
);

export const updateAuthorSuccess = createAction(
  '[Authors] Update Author Success',
  props<{ author: Author }>()
);

export const updateAuthorFailure = createAction(
  '[Authors] Update Author Failure',
  props<{ error: any }>()
);

// Delete Author
export const deleteAuthor = createAction(
  '[Authors] Delete Author',
  props<{ author: Author }>()
);

export const deleteAuthorCancelled = createAction(
  '[Authors] Delete Author Cancelled'
);

export const deleteAuthorSuccess = createAction(
  '[Authors] Delete Author Success',
  props<{ author: Author }>()
);

export const deleteAuthorFailure = createAction(
  '[Authors] Delete Author Failure',
  props<{ error: any }>()
);
