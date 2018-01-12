import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {HttpClientModule} from "@angular/common/http";
import {RecipeProvider} from "../providers/recipe/recipe";
import {RecipePage} from "../pages/recipe/recipe";
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipePage
  ],
  imports: [
    PipesModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    RecipePage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RecipeProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
