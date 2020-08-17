import { Course } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockCoursesFacade = {
  loadCourses: () => {},
  selectCourse: () => {},
  deleteCourse: () => {},
  updateCourse: () => {},
  createCourse: () => {},
  mutations$: of(true),
};
export const mockCourse: Course = {
  id: '0',
  title: 'mockCourse',
  description: 'mockCourse constant for testing',
  thumbnail: '',
  authorId: '0',
};
export const mockEmptyCourse: Course = {
  id: null,
  title: 'mockEmptyCourse',
  description: 'mockEmptyCourse constant for testing',
  thumbnail: '',
  authorId: '',
};
