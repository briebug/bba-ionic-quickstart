import { User } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockUsersFacade = {
  loadUsers: () => {},
  selectUser: () => {},
  deleteUser: () => {},
  updateUser: () => {},
  createUser: () => {},
  mutations$: of(true),
};

export const mockUsersService = {
  all: () => of([]),
  find: () => of({...mockUser}),
  create: () => of ({...mockUser}),
  update: () => of({...mockUser}),
  delete: () => of({...mockUser}),
}

export const mockUser: User = {
  id: '0',
  title: 'mockUser',
  description: 'mockUser constant for testing',
  firstName: 'Mock',
  lastName: 'User',
  email: 'mockUser@mock.com',
  password: '12345',
  profilePic: '',
  currentLessonId: '1',
  coursesCompleted: 1,
  lessonsCompleted: 1,
};
export const mockEmptyUser: User = {
  id: null,
  title: 'mockEmptyUser',
  description: 'mockEmptyUser constant for testing',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  profilePic: '',
  currentLessonId: '0',
  coursesCompleted: 0,
  lessonsCompleted: 0,
};
