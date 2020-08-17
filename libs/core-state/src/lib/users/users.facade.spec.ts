import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';

import { UsersFacade } from './users.facade';
import * as UsersActions from './users.actions';
import { initialUsersState } from './users.reducer';
import { mockUser } from '@bba/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('UsersFacade', () => {
  let facade: UsersFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersFacade,
        provideMockStore({ initialState: initialUsersState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(UsersFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have no mutations', () => {
    let result;
    facade.mutations$.subscribe((ret) => {
      result = ret;
    });

    expect(result).toBe(undefined);
  });

  it('should have mutations', () => {
    const action = UsersActions.createUser({ user: mockUser });
    actionSubject.next(action);

    let result;
    facade.mutations$.subscribe((ret) => {
      result = ret;
    });

    expect(result).toBe(action);
  });

  it('should login the correct user', () => {
    facade.allUsers$ = of([{...mockUser}])
    const spy = jest.spyOn(facade, 'selectUser');

    facade.login(mockUser.firstName, mockUser.lastName);

    expect(spy).toBeCalledWith(mockUser.id);
  });

  it('should return nothing if users.length == 0', () => {
    facade.allUsers$ = of([])
    const spy = jest.spyOn(facade, 'selectUser');

    facade.login(mockUser.firstName, mockUser.lastName);

    expect(spy).toBeCalledTimes(0);
  });

  describe('should dispatch', () => {
    it('select on select(user.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectUser(mockUser.id);

      const action = UsersActions.selectUser({ selectedId: mockUser.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadUsers on loadUsers()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadUsers();

      const action = UsersActions.loadUsers();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadUser on loadUser(user.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadUser(mockUser.id);

      const action = UsersActions.loadUser({ userId: mockUser.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createUser on createUser(user)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createUser(mockUser);

      const action = UsersActions.createUser({ user: mockUser });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateUser on updateUser(user)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateUser(mockUser);

      const action = UsersActions.updateUser({ user: mockUser });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteUser(mockUser);

      const action = UsersActions.deleteUser({ user: mockUser });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
