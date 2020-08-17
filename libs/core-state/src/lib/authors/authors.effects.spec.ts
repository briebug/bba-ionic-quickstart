import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { AuthorsEffects } from './authors.effects';
import * as AuthorsActions from './authors.actions';
import { AuthorsService } from '@bba/core-data';
import { mockAuthorsService, mockAuthor } from '@bba/testing';

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
        provideMockStore(),
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
    it('should work', () => {
      actions = hot('-a-|', { a: AuthorsActions.loadAuthors() });

      const expected = hot('-a-|', {
        a: AuthorsActions.loadAuthorsSuccess({ authors: [] }),
      });

      expect(effects.loadAuthors$).toBeObservable(expected);
    });

    it('should not work', () => {
      actions = hot('-a', { a: AuthorsActions.loadAuthors() });

      const error = new Error('mockError') as any;
      const response = cold('-#|', {}, error)

      const spy = jest.spyOn(service, 'all');
      spy.mockReturnValue(response);

      const expected = cold('--b', { b: AuthorsActions.loadAuthorsFailure({ error }) });

      expect(effects.loadAuthors$).toBeObservable(expected);
    });
  });

  describe('loadAuthor$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthorsActions.loadAuthor({ authorId: mockAuthor.id }) });

      const expected = hot('-a-|', {
        a: AuthorsActions.loadAuthorSuccess({ author: {...mockAuthor} }),
      });

      expect(effects.loadAuthor$).toBeObservable(expected);
    });

    it('should not work', () => {
      actions = hot('-a', { a: AuthorsActions.loadAuthor({authorId: mockAuthor.id}) });

      const error = new Error('mockError') as any;
      const response = cold('-#|', {}, error)

      const spy = jest.spyOn(service, 'find');
      spy.mockReturnValue(response);

      const expected = cold('--b', { b: AuthorsActions.loadAuthorFailure({ error }) });

      expect(effects.loadAuthor$).toBeObservable(expected);
    });
  });

  describe('createAuthor$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthorsActions.createAuthor({ author: mockAuthor }) });

      const expected = hot('-a-|', {
        a: AuthorsActions.createAuthorSuccess({ author: {...mockAuthor} }),
      });

      expect(effects.createAuthor$).toBeObservable(expected);
    });

    it('should not work', () => {
      actions = hot('-a', { a: AuthorsActions.createAuthor({ author: mockAuthor }) });

      const error = new Error('mockError') as any;
      const response = cold('-#|', {}, error)

      const spy = jest.spyOn(service, 'create');
      spy.mockReturnValue(response);

      const expected = cold('--b', { b: AuthorsActions.createAuthorFailure({ error }) });

      expect(effects.createAuthor$).toBeObservable(expected);
    });
  });

  describe('updateAuthor$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthorsActions.updateAuthor({ author: mockAuthor }) });

      const expected = hot('-a-|', {
        a: AuthorsActions.updateAuthorSuccess({ author: {...mockAuthor} }),
      });

      expect(effects.updateAuthor$).toBeObservable(expected);
    });

    it('should not work', () => {
      actions = hot('-a', { a: AuthorsActions.updateAuthor({ author: mockAuthor }) });

      const error = new Error('mockError') as any;
      const response = cold('-#|', {}, error)

      const spy = jest.spyOn(service, 'update');
      spy.mockReturnValue(response);

      const expected = cold('--b', { b: AuthorsActions.updateAuthorFailure({ error }) });

      expect(effects.updateAuthor$).toBeObservable(expected);
    });
  });

  describe('deleteAuthor$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthorsActions.deleteAuthor({ author: mockAuthor }) });

      const expected = hot('-a-|', {
        a: AuthorsActions.deleteAuthorSuccess({ author: {...mockAuthor} }),
      });

      expect(effects.deleteAuthor$).toBeObservable(expected);
    });

    it('should not work', () => {
      actions = hot('-a', { a: AuthorsActions.deleteAuthor({ author: mockAuthor }) });

      const error = new Error('mockError') as any;
      const response = cold('-#|', {}, error)

      const spy = jest.spyOn(service, 'delete');
      spy.mockReturnValue(response);

      const expected = cold('--b', { b: AuthorsActions.deleteAuthorFailure({ error }) });

      expect(effects.deleteAuthor$).toBeObservable(expected);
    });
  });

});
