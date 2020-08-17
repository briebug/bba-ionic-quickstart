import { Lesson } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockLessonsFacade = {
  loadLessons: () => {},
  selectLesson: () => {},
  deleteLesson: () => {},
  updateLesson: () => {},
  createLesson: () => {},
  mutations$: of(true),
};
export const mockLesson: Lesson = {
  id: '0',
  title: 'mockLesson',
  description: 'mockLesson constant for testing',
  videoUri: '',
  courseId: '0',
};
export const mockEmptyLesson: Lesson = {
  id: null,
  title: 'mockEmptyLesson',
  description: 'mockEmptyLesson constant for testing',
  videoUri: '',
  courseId: '0',
};
