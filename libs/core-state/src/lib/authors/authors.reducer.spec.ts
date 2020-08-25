import * as AuthorsActions from './authors.actions';
import {
  AuthorsState,
  initialAuthorsState,
  authorsReducer,
} from './authors.reducer';
import { mockAuthor, mockEmptyAuthor } from '@bba/testing';

describe('Authors Reducer', () => {
  let authors;

  beforeEach(() => {
    authors = [
      { ...mockAuthor, id: '0' },
      { ...mockAuthor, id: '1' },
      { ...mockAuthor, id: '2' },
    ];
  });

  describe('valid Authors actions', () => {
    it('loadAuthors should set loaded to false', () => {
      const action = AuthorsActions.loadAuthors();
      const expectedState = {
        ...initialAuthorsState,
        error: null,
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadAuthorsSuccess should set the list of known Authors', () => {
      const action = AuthorsActions.loadAuthorsSuccess({ authors });
      const expectedState = {
        ...initialAuthorsState,
        loaded: true,
        entities: {
          0: authors[0],
          1: authors[1],
          2: authors[2],
        },
        ids: authors.map((author) => author.id),
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadAuthorsFailure should set error to error', () => {
      const error = new Error();
      const action = AuthorsActions.loadAuthorsFailure({ error });
      const expectedState = {
        ...initialAuthorsState,
        error,
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadAuthor should set loaded to false', () => {
      const action = AuthorsActions.loadAuthor({ authorId: mockAuthor.id });
      const expectedState = {
        ...initialAuthorsState,
        loaded: false,
        error: null,
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadAuthorSuccess should set loaded to true', () => {
      const action = AuthorsActions.loadAuthorSuccess({ author: mockAuthor });
      const expectedState = {
        ...initialAuthorsState,
        loaded: true,
        entities: {
          0: mockAuthor,
        },
        ids: [mockAuthor.id],
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadAuthorFailure should set error to error', () => {
      const error = new Error();
      const action = AuthorsActions.loadAuthorFailure({ error });
      const expectedState = {
        ...initialAuthorsState,
        error,
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateAuthorSuccess should modify author', () => {
      const prepAction = AuthorsActions.loadAuthorSuccess({
        author: { ...mockEmptyAuthor, id: mockAuthor.id },
      });
      const prepState: AuthorsState = authorsReducer(
        initialAuthorsState,
        prepAction
      );

      const expectedState = {
        ...initialAuthorsState,
        loaded: true,
        entities: {
          0: mockAuthor,
        },
        ids: [mockAuthor.id],
      };

      const action = AuthorsActions.updateAuthorSuccess({ author: mockAuthor });
      const result: AuthorsState = authorsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateAuthorFailure should set error to error', () => {
      const error = new Error();
      const action = AuthorsActions.updateAuthorFailure({ error });
      const expectedState = {
        ...initialAuthorsState,
        error,
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createAuthorSuccess should add author', () => {
      const action = AuthorsActions.createAuthorSuccess({ author: mockAuthor });
      const expectedState = {
        ...initialAuthorsState,
        loaded: false,
        entities: {
          0: mockAuthor,
        },
        ids: [mockAuthor.id],
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createAuthorFailure should set error to error', () => {
      const error = new Error();
      const action = AuthorsActions.createAuthorFailure({ error });
      const expectedState = {
        ...initialAuthorsState,
        error,
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteAuthorSuccess should add author', () => {
      const prepAction = AuthorsActions.loadAuthorSuccess({
        author: mockAuthor,
      });
      const prepState: AuthorsState = authorsReducer(
        initialAuthorsState,
        prepAction
      );

      const expectedState = {
        ...initialAuthorsState,
        loaded: true,
      };

      const action = AuthorsActions.deleteAuthorSuccess({ author: mockAuthor });
      const result: AuthorsState = authorsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteAuthorFailure should set error to error', () => {
      const error = new Error();
      const action = AuthorsActions.deleteAuthorFailure({ error });
      const expectedState = {
        ...initialAuthorsState,
        error,
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('selectAuthor should set selectedId', () => {
      const action = AuthorsActions.selectAuthor({ selectedId: mockAuthor.id });
      const expectedState = {
        ...initialAuthorsState,
        selectedId: mockAuthor.id,
      };

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedAuthor should reset selectedId', () => {
      const prepAction = AuthorsActions.selectAuthor({
        selectedId: mockAuthor.id,
      });
      const prepState = authorsReducer(initialAuthorsState, prepAction);

      const action = AuthorsActions.resetSelectedAuthor();
      const expectedState = {
        ...initialAuthorsState,
        selectedId: null,
      };

      const result: AuthorsState = authorsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetAuthors should reset authors', () => {
      const prepAction = AuthorsActions.loadAuthorsSuccess({ authors });
      const prepState: AuthorsState = authorsReducer(
        initialAuthorsState,
        prepAction
      );

      const expectedState = {
        ...initialAuthorsState,
        loaded: true,
      };

      const action = AuthorsActions.resetAuthors();
      const result: AuthorsState = authorsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toBe(initialAuthorsState);
    });
  });
});
