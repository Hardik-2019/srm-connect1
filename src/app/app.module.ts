import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import {SocialSharing} from '@ionic-native/social-sharing';
import { IonicStorageModule } from '@ionic/storage';
import { EventsPage } from '../pages/events/events';
import { InterestPage } from '../pages/interest/interest';
import { EventformPage } from '../pages/eventform/eventform';
import { FeedbackPage } from '../pages/feedback/feedback';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { HttpModule }from '@angular/http';
import { NewpagePage } from '../pages/newpage/newpage';
import {ForumPage} from '../pages/forum/forum';
import {MyprofilePage} from '../pages/myprofile/myprofile';
import {DetailsPage} from '../pages/details/details';
import {AddPage} from '../pages/add/add';
import {ForgotpassPage} from '../pages/forgotpass/forgotpass';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    EventsPage,
    InterestPage,
    EventformPage,
    FeedbackPage,
    AboutusPage,
    NewpagePage,
    ForumPage,
    DetailsPage,
    AddPage,
    MyprofilePage,
    ForgotpassPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    EventsPage,
    InterestPage,
    EventformPage,
    FeedbackPage,
    AboutusPage,
    NewpagePage,
    ForumPage,
    DetailsPage,
    AddPage,
    MyprofilePage,
    ForgotpassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
