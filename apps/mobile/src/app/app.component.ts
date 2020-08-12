import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  AuthorsFacade,
  CoursesFacade,
  LessonsFacade,
  UsersFacade,
} from '@bba/core-state';

@Component({
  selector: 'bba-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authorsFacade: AuthorsFacade,
    private coursesFacade: CoursesFacade,
    private lessonsFacade: LessonsFacade,
    private usersFacade: UsersFacade
  ) {
    this.initializeApp();
    this.loadData();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  loadData() {
    this.authorsFacade.loadAuthors();
    this.coursesFacade.loadCourses();
    this.lessonsFacade.loadLessons();
    this.usersFacade.loadUsers();
    // For demonstration purposes only...
    this.usersFacade.login('Cole', 'Sanders');
  }

  ngOnInit() {
    this.getSelectedPageIndex();
  }

  getSelectedPageIndex() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.pages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }

  setSelectedPage(index) {
    this.selectedIndex = index;
  }
}
