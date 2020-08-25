import { mockLesson, mockCourse, mockAuthor, mockUser } from '@bba/testing';
import {
  getFullCourses,
  getFullAuthors,
  getFullUsers,
  getFullUser,
  getNavigatedCourse,
  getNavigatedLesson,
} from '.';

describe('Index Common Selector', () => {
  let lessons, courses, authors, users;

  beforeEach(() => {
    lessons = [
      { ...mockLesson, id: '0' },
      { ...mockLesson, id: '1' },
      { ...mockLesson, id: '2' },
    ];
    courses = [
      { ...mockCourse, id: '0' },
      { ...mockCourse, id: '1' },
      { ...mockCourse, id: '2' },
    ];
    authors = [
      { ...mockAuthor, id: '0' },
      { ...mockAuthor, id: '1' },
      { ...mockAuthor, id: '2' },
    ];
    users = [
      { ...mockUser, id: '0' },
      { ...mockUser, id: '1' },
      { ...mockUser, id: '2' },
    ];
  });

  it('should select the related authors and lessons on Courses', () => {
    expect(
      getFullCourses.projector(authors, courses, lessons)
    ).toMatchSnapshot();
  });

  it('should select the related courses on Authors', () => {
    expect(getFullAuthors.projector(authors, courses)).toMatchSnapshot();
  });

  it('should select the related courses and lessons on Users', () => {
    expect(getFullUsers.projector(courses, lessons, users)).toMatchSnapshot();
  });

  describe('should select the related courses and lessons on selected user', () => {
    it('on selected user', () => {
      expect(
        getFullUser.projector(courses, lessons, users[0])
      ).toMatchSnapshot();
    });

    it('on no selected user', () => {
      expect(getFullUser.projector(courses, lessons, null)).toMatchSnapshot();
    });
  });

  it('should select the navigated course', () => {
    courses = [
      { ...mockCourse, id: '0' },
      { ...mockCourse, id: '0' },
      { ...mockCourse, id: '0' },
    ];

    expect(getNavigatedCourse.projector(courses, '0')).toMatchSnapshot();
  });

  it('should select the navigated lesson', () => {
    expect(getNavigatedLesson.projector(lessons, 0)).toMatchSnapshot();
  });
});
