import { AuthorsEntity } from './authors.models';
import * as AuthorsActions from './authors.actions';
import { State, initialState, reducer } from './authors.reducer';

describe('Authors Reducer', () => {
  const createAuthorsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AuthorsEntity);

  beforeEach(() => {});

  describe('valid Authors actions', () => {
    it('loadAuthorsSuccess should return set the list of known Authors', () => {
      const authors = [
        createAuthorsEntity('PRODUCT-AAA'),
        createAuthorsEntity('PRODUCT-zzz'),
      ];
      const action = AuthorsActions.loadAuthorsSuccess({ authors });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
