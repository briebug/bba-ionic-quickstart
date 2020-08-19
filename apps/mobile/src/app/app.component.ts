import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
