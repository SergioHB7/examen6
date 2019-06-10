import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';
import { LogPage } from '../pages/log/log';
export const config = {
  apiKey: "AIzaSyDNaKEkKox5h5_6u2zHU9Jm-VIf9otfOYI",
    authDomain: "examen-final-dc119.firebaseapp.com",
    databaseURL: "https://examen-final-dc119.firebaseio.com",
    projectId: "examen-final-dc119",
    storageBucket: "examen-final-dc119.appspot.com",
    messagingSenderId: "572471229127",
    appId: "1:572471229127:web:a88ed175fa124879"
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LogPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config)
  }
}
