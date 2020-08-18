import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { AuthorsEffects } from './authors.effects';
import * as AuthorsActions from './authors.actions';
import { AuthorsService } from '@bba/core-data';

import { mockAuthorsService, mockAuthor } from '@bba/testing';
import { Author } from '@bba/api-interfaces';

describe('AuthorsEffects', () => {
  let actions: Observable<any>;
  let effects: AuthorsEffects;
  let service: AuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AuthorsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: AuthorsService, useValue: mockAuthorsService },
      ],
    });

    effects = TestBed.inject(AuthorsEffects);
    service = TestBed.inject(AuthorsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadAuthors$', () => {
    it('should return loadAuthorsSuccess, on success', () => {
      const authors: Author[] = [];
      const action = AuthorsActions.loadAuthors();
      const outcome = AuthorsActions.loadAuthorsSuccess({ authors });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: authors });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadAuthors$).toBeObservable(expected);
    });

    it('should return loadAuthorsFailure, on failure', () => {
      const action = AuthorsActions.loadAuthors();
      const error = new Error();
      const outcome = AuthorsActions.loadAuthorsFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadAuthors$).toBeObservable(expected);
    });
  });

  describe('loadAuthor$', () => {
    it('should return success with author', () => {
      const author = { ...mockAuthor };
      const action = AuthorsActions.loadAuthor({ authorId: author.id });
      const outcome = AuthorsActions.loadAuthorSuccess({ author });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: author });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadAuthor$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const author = { ...mockAuthor };
      const action = AuthorsActions.loadAuthor({ authorId: author.id });
      const error = new Error();
      const outcome = AuthorsActions.loadAuthorFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadAuthor$).toBeObservable(expected);
    });
  });

  describe('createAuthor$', () => {
    it('should return success with author', () => {
      const author = { ...mockAuthor };
      const action = AuthorsActions.createAuthor({ author });
      const outcome = AuthorsActions.createAuthorSuccess({ author });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: author });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createAuthor$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const author = { ...mockAuthor };
      const action = AuthorsActions.createAuthor({ author });
      const error = new Error();
      const outcome = AuthorsActions.createAuthorFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createAuthor$).toBeObservable(expected);
    });
  });

  describe('updateAuthor$', () => {
    it('should return success with author', () => {
      const author = { ...mockAuthor };
      const action = AuthorsActions.updateAuthor({ author });
      const outcome = AuthorsActions.updateAuthorSuccess({ author });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: author });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateAuthor$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const author = { ...mockAuthor };
      const action = AuthorsActions.updateAuthor({ author });
      const error = new Error();
      const outcome = AuthorsActions.updateAuthorFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateAuthor$).toBeObservable(expected);
    });
  });

  describe('deleteAuthor$', () => {
    it('should return success with author', () => {
      const author = { ...mockAuthor };
      const action = AuthorsActions.deleteAuthor({ author });
      const outcome = AuthorsActions.deleteAuthorSuccess({ author });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: author });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteAuthor$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const author = { ...mockAuthor };
      const action = AuthorsActions.deleteAuthor({ author });
      const error = new Error();
      const outcome = AuthorsActions.deleteAuthorFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteAuthor$).toBeObservable(expected);
    });
  });
});
