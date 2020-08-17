import { Author } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockAuthorsFacade = {
  loadAuthors: () => {},
  selectAuthor: () => {},
  deleteAuthor: () => {},
  updateAuthor: () => {},
  createAuthor: () => {},
  mutations$: of(true),
};
export const mockAuthor: Author = {
  id: '0',
  title: 'mockAuthor',
  description: 'mockAuthor constant for testing',
  firstName: 'Mock',
  lastName: 'Author',
  profilePic: '',
};
export const mockEmptyAuthor: Author = {
  id: null,
  title: 'mockEmptyAuthor',
  description: 'mockEmptyAuthor constant for testing',
  firstName: '',
  lastName: '',
  profilePic: '',
};
