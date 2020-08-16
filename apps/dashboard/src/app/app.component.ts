import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed',
}

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Briebug Academy Dashboard';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/authors', icon: 'face', title: 'Authors' },
    { path: '/courses', icon: 'view_module', title: 'Courses' },
    { path: '/lessons', icon: 'view_list', title: 'Lessons' },
    { path: '/users', icon: 'people', title: 'Users' },
  ];

  isAuthenticated$: Observable<boolean> = of(true);
  sidenavStatus = SidenavStatus.OPENED;

  constructor() {}

  logout() {}

  toggleSidenav() {
    this.sidenavStatus =
      this.sidenavStatus === SidenavStatus.OPENED
        ? SidenavStatus.CLOSED
        : SidenavStatus.OPENED;
  }
}
