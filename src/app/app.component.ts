import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  @ViewChild('myNav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.goToPage();
  }

  goToPage() {
    setTimeout(() => {
      this.nav.insertPages(this.nav.length(), [
        {
          page: ListPage,
          params: {}
        },
        {
          page: DetailPage,
          params: {
            name: 'hey',
            id: 'hey'
          }
        }
      ], {
          animate: false
        })
        .then(res => console.log(this.nav.getViews()))
        .catch(err => console.error(err))
    }, 2000);
  }
}
