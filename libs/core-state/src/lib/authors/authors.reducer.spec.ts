import * as AuthorsActions from "./authors.actions";
import { AuthorsState, initialAuthorsState, authorsReducer } from "./authors.reducer";
import { mockAuthor, mockEmptyAuthor } from "@bba/testing";

describe("Authors Reducer", () => {
  let authors;

  beforeEach(() => {
    authors = [
      { ...mockAuthor, id: "0" },
      { ...mockAuthor, id: "1" },
      { ...mockAuthor, id: "2" },
    ];
  });

  describe("valid Authors actions", () => {
    it("loadAuthors should set loaded to false", () => {
      const action = AuthorsActions.loadAuthors();

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.loaded).toBe(false);
      expect(result.error).toBe(null);
    });

    it("loadAuthorsSuccess should return set the list of known Authors", () => {
      const action = AuthorsActions.loadAuthorsSuccess({ authors });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(authors.length);
    });

    it("loadAuthorsFailure should set error to error", () => {
      const action = AuthorsActions.loadAuthorsFailure({ error: "error" });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.error).toBe("error");
    });

    it("loadAuthor should set loaded to false", () => {
      const action = AuthorsActions.loadAuthor({ authorId: mockAuthor.id });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.loaded).toBe(false);
      expect(result.error).toBe(null);
    });

    it("loadAuthorSuccess should set loaded to true", () => {
      const action = AuthorsActions.loadAuthorSuccess({ author: mockAuthor });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(1);
    });

    it("loadAuthorFailure should set error to error", () => {
      const action = AuthorsActions.loadAuthorFailure({ error: "error" });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.error).toBe("error");
    });

    it("updateAuthorSuccess should modify author", () => {
      const prepAction = AuthorsActions.loadAuthorSuccess({
        author: { ...mockEmptyAuthor, id: mockAuthor.id },
      });
      const prepState: AuthorsState = authorsReducer(initialAuthorsState, prepAction);

      const action = AuthorsActions.updateAuthorSuccess({ author: mockAuthor });
      const result: AuthorsState = authorsReducer(prepState, action);

      expect(result.ids.length).toBe(1);
      expect(result.entities[0]).toStrictEqual(mockAuthor);
    });

    it("updateAuthorFailure should set error to error", () => {
      const action = AuthorsActions.updateAuthorFailure({ error: "error" });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.error).toBe("error");
    });

    it("createAuthorSuccess should add author", () => {
      const action = AuthorsActions.createAuthorSuccess({ author: mockAuthor });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.ids.length).toBe(1);
    });

    it("createAuthorFailure should set error to error", () => {
      const action = AuthorsActions.createAuthorFailure({ error: "error" });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.error).toBe("error");
    });

    it("deleteAuthorSuccess should add author", () => {
      const prepAction = AuthorsActions.loadAuthorSuccess({ author: mockAuthor });
      const prepState: AuthorsState = authorsReducer(initialAuthorsState, prepAction);

      const action = AuthorsActions.deleteAuthorSuccess({ author: mockAuthor });
      const result: AuthorsState = authorsReducer(prepState, action);

      expect(result.ids.length).toBe(0);
    });

    it("deleteAuthorFailure should set error to error", () => {
      const action = AuthorsActions.deleteAuthorFailure({ error: "error" });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.error).toBe("error");
    });

    it("selectAuthor should set selectedId", () => {
      const action = AuthorsActions.selectAuthor({ selectedId: mockAuthor.id });

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.selectedId).toBe(mockAuthor.id);
    });

    it("resetSelectedAuthor should reset selectedId", () => {
      const action = AuthorsActions.resetSelectedAuthor();

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result.selectedId).toBe(null);
    });

    it("resetAuthors should reset author state", () => {
      const prepAction = AuthorsActions.loadAuthorsSuccess({ authors });
      const newState: AuthorsState = authorsReducer(initialAuthorsState, prepAction);

      const action = AuthorsActions.resetAuthors();
      const result: AuthorsState = authorsReducer(newState, action);

      expect(result.ids.length).toBe(0);
    });
  });

  describe("unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result: AuthorsState = authorsReducer(initialAuthorsState, action);

      expect(result).toBe(initialAuthorsState);
    });
  });
});
