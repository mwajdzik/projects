import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RouterModule, Routes} from '@angular/router';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipeService} from './recipe.service';
import {RecipeResolverService} from './recipe/recipe-resolver.service';

const appRoutes: Routes = [
  {
    path: 'recipes', component: RecipesListComponent, children: [
      {path: ':id', component: RecipeComponent, resolve: {recipe: RecipeResolverService}}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeService, RecipeResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
