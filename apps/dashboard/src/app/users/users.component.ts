import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson, User } from '@bba/api-interfaces';
import { LessonsFacade, UsersFacade } from '@bba/core-state';

@Component({
  selector: 'bba-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  lessons$: Observable<Lesson[]> = this.lessonsFacade.allLessons$;
  users$: Observable<User[]> = this.usersFacade.allUsers$;
  selectedUser$: Observable<User> = this.usersFacade.selectedUser$;

  constructor(
    private usersFacade: UsersFacade,
    private lessonsFacade: LessonsFacade
  ) {}

  ngOnInit(): void {
    this.reset();
    this.usersFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadUsers();
    this.loadLessons();
    this.usersFacade.selectUser(null);
  }

  selectUser(user: User) {
    this.usersFacade.selectUser(user.id);
  }

  loadUsers() {
    this.usersFacade.loadUsers();
  }

  loadLessons() {
    this.lessonsFacade.loadLessons();
  }

  saveUser(user: User) {
    if (user.id) {
      this.usersFacade.updateUser(user);
    } else {
      this.usersFacade.createUser(user);
    }
  }

  deleteUser(user: User) {
    this.usersFacade.deleteUser(user);
  }
}
