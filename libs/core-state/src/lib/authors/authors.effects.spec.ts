import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AuthorsEffects } from './authors.effects';
import * as AuthorsActions from './authors.actions';

describe('AuthorsEffects', () => {
  let actions: Observable<any>;
  let effects: AuthorsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AuthorsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(AuthorsEffects);
  });

  describe('loadAuthors$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthorsActions.loadAuthors() });

      const expected = hot('-a-|', {
        a: AuthorsActions.loadAuthorsSuccess({ authors: [] }),
      });

      expect(effects.loadAuthors$).toBeObservable(expected);
    });
  });
});
