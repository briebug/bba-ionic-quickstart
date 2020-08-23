import { Component } from '@angular/core';

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public dark = false;
  public pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Courses',
      url: '/courses',
      icon: 'rocket',
    },
    {
      title: 'Lessons',
      url: '/lessons',
      icon: 'paper-plane',
    },
    {
      title: 'Authors',
      url: '/authors',
      icon: 'people',
    },
  ];
}
