import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {RecipeProvider} from "../providers/recipe/recipe";
import {RecipePage} from "../pages/recipe/recipe";
import {PipesModule} from "../pipes/pipes.module";
import {CategoriesPage} from "../pages/categories/categories";
import {RecipesPage} from "../pages/recipes/recipes";

@NgModule({
  declarations: [
    MyApp,
    CategoriesPage,
    RecipesPage,
    RecipePage
  ],
  imports: [
    PipesModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    RecipePage,
    CategoriesPage,
    RecipesPage
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
