import { AuthorsEntity } from './authors.models';
import { State, authorsAdapter, initialState } from './authors.reducer';
import * as AuthorsSelectors from './authors.selectors';

describe('Authors Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAuthorsId = (it) => it['id'];
  const createAuthorsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AuthorsEntity);

  let state;

  beforeEach(() => {
    state = {
      authors: authorsAdapter.addAll(
        [
          createAuthorsEntity('PRODUCT-AAA'),
          createAuthorsEntity('PRODUCT-BBB'),
          createAuthorsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Authors Selectors', () => {
    it('getAllAuthors() should return the list of Authors', () => {
      const results = AuthorsSelectors.getAllAuthors(state);
      const selId = getAuthorsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AuthorsSelectors.getSelected(state);
      const selId = getAuthorsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getAuthorsLoaded() should return the current 'loaded' status", () => {
      const result = AuthorsSelectors.getAuthorsLoaded(state);

      expect(result).toBe(true);
    });

    it("getAuthorsError() should return the current 'error' state", () => {
      const result = AuthorsSelectors.getAuthorsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
