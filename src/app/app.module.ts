import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabPageModule} from "../pages/tab/tab.module";
import {MemesListPageModule} from "../pages/memes-list/memes-list.module";
import {MemeNewPageModule} from "../pages/memes-list/meme-new/meme-new.module";
import {MemePageModule} from "../pages/memes-list/meme/meme.module";
import { MemeProvider } from '../providers/meme/meme';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AboutPageModule} from "../pages/about/about.module";
import {LocalisationPageModule} from "../pages/localisation/localisation.module";
import {PhotosPageModule} from "../pages/photos/photos.module";

const firebase = {
  apiKey: "AIzaSyCa-Xye-VaU41rXIX2-Kr8Lk_lO70aluqA",
  authDomain: "meme-angular.firebaseapp.com",
  projectId: "meme-angular",
  storageBucket: "meme-angular.appspot.com",
  messagingSenderId: "579679418963",
  appId: "1:579679418963:web:412496cee28d545914e4a6"
}

import { Camera } from "@ionic-native/camera";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabPageModule,
    MemesListPageModule,
    AboutPageModule,
    MemeNewPageModule,
    MemePageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    PhotosPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemeProvider,
    Camera
  ]
})
export class AppModule {}
