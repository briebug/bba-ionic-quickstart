import { AuthorsState, authorsAdapter, initialAuthorsState } from "./authors.reducer";
import * as AuthorsSelectors from "./authors.selectors";
import { Author } from "@bba/api-interfaces";
import { mockAuthor } from "@bba/testing";

describe("Authors Selectors", () => {
  const ERROR_MSG = "No Error Available";
  const getAuthorsId = (it) => it["id"];
  const createAuthor = (id: string, name = "") => ({ ...mockAuthor, id: id } as Author);

  let state;

  beforeEach(() => {
    state = {
      authors: authorsAdapter.setAll(
        [
          createAuthor("PRODUCT-AAA"),
          createAuthor("PRODUCT-BBB"),
          createAuthor("PRODUCT-CCC"),
        ],
        {
          ...initialAuthorsState,
          selectedId: "PRODUCT-BBB",
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe("Authors Selectors", () => {
    it("getAllAuthors() should return the list of Authors", () => {
      const results = AuthorsSelectors.getAllAuthors(state);
      const selId = getAuthorsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe("PRODUCT-BBB");
    });

    it("getSelected() should return the selected Entity", () => {
      const result = AuthorsSelectors.getSelectedAuthor(state);
      const selId = getAuthorsId(result);

      expect(selId).toBe("PRODUCT-BBB");
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
