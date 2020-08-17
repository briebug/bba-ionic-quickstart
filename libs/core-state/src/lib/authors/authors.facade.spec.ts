import { TestBed } from "@angular/core/testing";
import { ActionsSubject } from "@ngrx/store";

import { AuthorsFacade } from "./authors.facade";
import * as AuthorsActions from "./authors.actions";
import { initialAuthorsState } from "./authors.reducer";
import { mockAuthor } from "@bba/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";

describe("AuthorsFacade", () => {
  let facade: AuthorsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthorsFacade,
        provideMockStore({ initialState: initialAuthorsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(AuthorsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it("should be created", () => {
    expect(facade).toBeTruthy();
  });

  it("should have no mutations", () => {
    let result;
    facade.mutations$.subscribe((ret) => {
      result = ret;
    });

    expect(result).toBe(undefined);
  });

  it("should have mutations", () => {
    const action = AuthorsActions.createAuthor({ author: mockAuthor });
    actionSubject.next(action);

    let result;
    facade.mutations$.subscribe((ret) => {
      result = ret;
    });

    expect(result).toBe(action);
  });

  describe("should dispatch", () => {
    it("select on select(author.id)", () => {
      const spy = jest.spyOn(store, "dispatch");

      facade.selectAuthor(mockAuthor.id);

      const action = AuthorsActions.selectAuthor({ selectedId: mockAuthor.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it("loadAuthors on loadAuthors()", () => {
      const spy = jest.spyOn(store, "dispatch");

      facade.loadAuthors();

      const action = AuthorsActions.loadAuthors();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it("loadAuthor on loadAuthor(author.id)", () => {
      const spy = jest.spyOn(store, "dispatch");

      facade.loadAuthor(mockAuthor.id);

      const action = AuthorsActions.loadAuthor({ authorId: mockAuthor.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it("createAuthor on createAuthor(author)", () => {
      const spy = jest.spyOn(store, "dispatch");

      facade.createAuthor(mockAuthor);

      const action = AuthorsActions.createAuthor({ author: mockAuthor });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it("updateAuthor on updateAuthor(author)", () => {
      const spy = jest.spyOn(store, "dispatch");

      facade.updateAuthor(mockAuthor);

      const action = AuthorsActions.updateAuthor({ author: mockAuthor });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it("delete on delete(model)", () => {
      const spy = jest.spyOn(store, "dispatch");

      facade.deleteAuthor(mockAuthor);

      const action = AuthorsActions.deleteAuthor({ author: mockAuthor });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
